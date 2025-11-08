/// <reference types="vite/client" />
import { readdir, stat } from 'node:fs/promises';
import { join, sep, posix } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Hono } from 'hono';
import type { Handler } from 'hono/types';
import updatedFetch from '../src/__create/fetch';

const API_BASENAME = '/api';
const api = new Hono();

// Get current directory
const __dirname = join(fileURLToPath(new URL('.', import.meta.url)), '../src/app/api');
if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Recursively find all route.ts and route.js files
async function findRouteFiles(dir: string): Promise<string[]> {
  try {
    const files = await readdir(dir);
    let routes: string[] = [];

    for (const file of files) {
      try {
        const filePath = join(dir, file);
        const statResult = await stat(filePath);

        if (statResult.isDirectory()) {
          routes = routes.concat(await findRouteFiles(filePath));
        } else if (file === 'route.ts' || file === 'route.js') {
          // Handle root route specially
          const rootRouteTs = join(__dirname, 'route.ts');
          const rootRouteJs = join(__dirname, 'route.js');
          if (filePath === rootRouteTs || filePath === rootRouteJs) {
            routes.unshift(filePath); // Add to beginning of array
          } else {
            routes.push(filePath);
          }
        }
      } catch (error) {
        console.error(`Error reading file ${file}:`, error);
      }
    }

    return routes;
  } catch (error) {
    // Directory doesn't exist or can't be read
    console.warn(`API directory not found or cannot be read: ${dir}`);
    return [];
  }
}

// Helper function to normalize Windows paths to POSIX for consistent URL handling
function normalizePath(filePath: string): string {
  // Convert Windows backslashes to forward slashes
  return filePath.split(sep).join(posix.sep);
}

// Helper function to transform file path to Hono route path
function getHonoPath(routeFile: string): { name: string; pattern: string }[] {
  const normalizedFile = normalizePath(routeFile);
  const normalizedDir = normalizePath(__dirname);
  const relativePath = normalizedFile.replace(normalizedDir, '');
  const parts = relativePath.split('/').filter(Boolean);
  const routeParts = parts.slice(0, -1); // Remove 'route.ts' or 'route.js'
  if (routeParts.length === 0) {
    return [{ name: 'root', pattern: '' }];
  }
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

// Import and register all routes
async function registerRoutes() {
  const routeFiles = (
    await findRouteFiles(__dirname).catch((error) => {
      console.error('Error finding route files:', error);
      return [];
    })
  )
    .slice()
    .sort((a, b) => {
      return b.length - a.length;
    });

  // Clear existing routes
  api.routes = [];

  const registeredRoutes = new Set<string>();

  for (const routeFile of routeFiles) {
    try {
      // Convert file path to proper file:// URL for ESM import
      const fileUrl = pathToFileURL(routeFile).href;
      // Add cache-busting query for dev HMR
      const moduleUrl = import.meta.env.DEV ? `${fileUrl}?t=${Date.now()}` : fileUrl;
      
      const route = await import(/* @vite-ignore */ moduleUrl);

      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
      let hasValidExport = false;
      
      for (const method of methods) {
        try {
          if (route[method]) {
            hasValidExport = true;
            const parts = getHonoPath(routeFile);
            const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;
            const routeKey = `${method}:${honoPath}`;
            
            // Only register once
            if (!registeredRoutes.has(routeKey)) {
              registeredRoutes.add(routeKey);
              
              const handler: Handler = async (c) => {
                const params = c.req.param();
                if (import.meta.env.DEV) {
                  // Re-import in dev for HMR
                  const freshUrl = `${fileUrl}?t=${Date.now()}`;
                  const updatedRoute = await import(/* @vite-ignore */ freshUrl);
                  return await updatedRoute[method](c.req.raw, { params });
                }
                return await route[method](c.req.raw, { params });
              };
              
              const methodLowercase = method.toLowerCase();
              switch (methodLowercase) {
                case 'get':
                  api.get(honoPath, handler);
                  break;
                case 'post':
                  api.post(honoPath, handler);
                  break;
                case 'put':
                  api.put(honoPath, handler);
                  break;
                case 'delete':
                  api.delete(honoPath, handler);
                  break;
                case 'patch':
                  api.patch(honoPath, handler);
                  break;
                default:
                  console.warn(`Unsupported method: ${method}`);
                  break;
              }
              
              console.info(`✓ Registered ${method} ${API_BASENAME}${honoPath}`);
            }
          }
        } catch (error) {
          console.error(`Error registering route ${routeFile} for method ${method}:`, error);
        }
      }
      
      if (!hasValidExport) {
        console.warn(`⚠ Route file has no valid HTTP method exports: ${routeFile}`);
      }
    } catch (error) {
      console.error(`Error importing route file ${routeFile}:`, error);
    }
  }
}

// Initial route registration
await registerRoutes();

// Hot reload routes in development
if (import.meta.env.DEV) {
  // Watch both .ts and .js route files
  import.meta.glob('../src/app/api/**/route.{ts,js}', {
    eager: true,
  });
  if (import.meta.hot) {
    import.meta.hot.accept((newSelf) => {
      console.info('🔄 Reloading API routes...');
      registerRoutes().catch((err) => {
        console.error('Error reloading routes:', err);
      });
    });
  }
}

export { api, API_BASENAME };
