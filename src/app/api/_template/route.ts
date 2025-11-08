/**
 * Minimal Next.js-style API Route Template
 * 
 * Export HTTP method handlers: GET, POST, PUT, DELETE, PATCH
 * Each handler receives (request: Request, context: { params: Record<string, string> })
 * Must return a Response object
 */

export async function GET(request: Request, context?: { params: Record<string, string> }) {
  return new Response(
    JSON.stringify({ 
      success: true, 
      message: 'Template route working',
      params: context?.params || {}
    }), 
    { 
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

// Optional: Add other HTTP methods as needed
/*
export async function POST(request: Request, context?: { params: Record<string, string> }) {
  try {
    const body = await request.json();
    
    return Response.json(
      { 
        success: true, 
        data: body 
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    );
  }
}
*/
