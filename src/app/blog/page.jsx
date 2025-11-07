import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building AI-Powered Attribution Models That Actually Work",
      excerpt:
        "How we reduced CAC by 42% for an e-commerce client using custom attribution modeling and machine learning.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI/ML",
      tags: ["Attribution", "Machine Learning", "E-commerce"],
      slug: "ai-attribution-models",
      featured: true,
    },
    {
      title: "The Complete Guide to RAG Implementation for Customer Support",
      excerpt:
        "Step-by-step walkthrough of building a retrieval-augmented generation system that deflected 61% of support tickets.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "AI/ML",
      tags: ["RAG", "Customer Support", "NLP"],
      slug: "rag-customer-support-guide",
      featured: true,
    },
    {
      title:
        "Next.js 14 Performance Optimization: From 60 to 95 Lighthouse Score",
      excerpt:
        "Practical techniques we used to achieve 95+ Lighthouse scores across performance, accessibility, and SEO.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Web Development",
      tags: ["Next.js", "Performance", "SEO"],
      slug: "nextjs-performance-optimization",
      featured: false,
    },
    {
      title: "AI Automation Workflows: 7 Use Cases That Drive Real ROI",
      excerpt:
        "Real-world examples of AI automation implementations that delivered measurable business outcomes.",
      date: "2024-12-28",
      readTime: "6 min read",
      category: "AI Automation",
      tags: ["Automation", "ROI", "Business Intelligence"],
      slug: "ai-automation-roi-use-cases",
      featured: false,
    },
    {
      title: "Modern ML Architecture: Building Scalable Pipelines with MLOps",
      excerpt:
        "How to design production-ready machine learning systems that scale with your business needs.",
      date: "2024-12-20",
      readTime: "15 min read",
      category: "ML Engineering",
      tags: ["MLOps", "Architecture", "Scalability"],
      slug: "modern-ml-architecture-guide",
      featured: false,
    },
    {
      title:
        "Converting Technical SEO Audits Into Growth: A Data-Driven Approach",
      excerpt:
        "Our systematic approach to technical SEO that increased organic traffic by 180% in 6 months.",
      date: "2024-12-15",
      readTime: "9 min read",
      category: "SEO",
      tags: ["Technical SEO", "Growth", "Analytics"],
      slug: "technical-seo-growth-strategy",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "AI/ML",
    "Web Development",
    "AI Automation",
    "ML Engineering",
    "SEO",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#FEFEFE] to-[#F8F8F8] dark:from-[#0B0B10] dark:to-[#111111]">
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-black dark:text-white mb-6 font-bold">
              <span className="text-[#6C5CE7]">Insights</span> & Playbooks
            </h1>
            <p className="text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-[60ch] mx-auto mb-12 leading-relaxed">
              Playbooks on AI, marketing, and web engineering from our team
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 bg-white dark:bg-[#0B0B10] border-b border-[#E5E5E5] dark:border-[#333333]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 ${
                    category === "All"
                      ? "bg-[#6C5CE7] text-white"
                      : "bg-[#F8F9FA] dark:bg-[#1A1A1A] text-[#666666] dark:text-[#B0B0B0] hover:bg-[#E5E5E5] dark:hover:bg-[#333333] hover:text-[#111111] dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 md:py-20 px-6 bg-white dark:bg-[#0B0B10]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mb-12">
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <article
                    key={post.slug}
                    className="group bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#E5E5E5] dark:border-[#333333] hover:border-[#6C5CE7] dark:hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Featured Badge */}
                    <div className="p-6 pb-0">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6C5CE7] text-white text-xs font-semibold rounded-full mb-4">
                        <Tag size={12} />
                        Featured
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <div className="flex items-center gap-4 text-sm text-[#666666] dark:text-[#B0B0B0] mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                        <span className="px-2 py-1 bg-[#E5E5E5] dark:bg-[#333333] text-xs rounded-md">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#111111] dark:text-white mb-3 group-hover:text-[#6C5CE7] transition-colors duration-200">
                        <a
                          href={`/blog/${post.slug}`}
                          className="focus:outline-none focus:text-[#6C5CE7]"
                        >
                          {post.title}
                        </a>
                      </h3>

                      <p className="text-[#666666] dark:text-[#B0B0B0] mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white dark:bg-[#0B0B10] text-[#666666] dark:text-[#B0B0B0] text-xs rounded-md border border-[#E5E5E5] dark:border-[#333333]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[#6C5CE7] font-semibold hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 rounded-lg px-2 py-1"
                      >
                        <span>Read Article</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
            </div>

            {/* All Posts */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mb-12">
              All Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <article
                    key={post.slug}
                    className="group bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#E5E5E5] dark:border-[#333333] hover:border-[#6C5CE7] dark:hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-[#666666] dark:text-[#B0B0B0] mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <span className="inline-block px-2 py-1 bg-[#E5E5E5] dark:bg-[#333333] text-[#666666] dark:text-[#B0B0B0] text-xs rounded-md mb-3">
                        {post.category}
                      </span>

                      <h3 className="text-lg md:text-xl font-bold text-[#111111] dark:text-white mb-3 group-hover:text-[#6C5CE7] transition-colors duration-200">
                        <a
                          href={`/blog/${post.slug}`}
                          className="focus:outline-none focus:text-[#6C5CE7]"
                        >
                          {post.title}
                        </a>
                      </h3>

                      <p className="text-[#666666] dark:text-[#B0B0B0] mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white dark:bg-[#0B0B10] text-[#666666] dark:text-[#B0B0B0] text-xs rounded-md border border-[#E5E5E5] dark:border-[#333333]"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-white dark:bg-[#0B0B10] text-[#666666] dark:text-[#B0B0B0] text-xs rounded-md border border-[#E5E5E5] dark:border-[#333333]">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[#6C5CE7] font-semibold hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 rounded-lg px-2 py-1"
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-20 px-6 bg-[#F8F9FA] dark:bg-[#111111]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] dark:text-white mb-6">
              Stay ahead of the curve
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
              Get our latest insights on AI, web development, and growth
              strategies delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl text-[#111111] dark:text-white placeholder-[#666666] dark:placeholder-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#6C5CE7] hover:bg-[#5B4BD6] text-white font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 flex items-center justify-center gap-2">
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
