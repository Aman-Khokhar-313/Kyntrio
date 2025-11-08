import { useParams } from "react-router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();

  // Blog posts data (same as in blog listing)
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

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
        <Header />
        <main className="py-20 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#111111] dark:text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#22C55E] font-semibold hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B10]">
      <Header />

      <main>
        {/* Back Button */}
        <section className="py-6 px-6 border-b border-[#E5E5E5] dark:border-[#333333]">
          <div className="max-w-[800px] mx-auto">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#666666] dark:text-[#B0B0B0] hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </a>
          </div>
        </section>

        {/* Article Header */}
        <article className="py-16 md:py-20 px-6">
          <div className="max-w-[800px] mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#22C55E] text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-[#666666] dark:text-[#B0B0B0] mb-8 pb-8 border-b border-[#E5E5E5] dark:border-[#333333]">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#F8F9FA] dark:bg-[#1A1A1A] text-[#666666] dark:text-[#B0B0B0] text-sm rounded-lg border border-[#E5E5E5] dark:border-[#333333]"
                >
                  <Tag size={12} className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-[#666666] dark:text-[#B0B0B0] mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] border-l-4 border-[#22C55E] p-6 rounded-r-lg mb-8">
                <p className="text-[#666666] dark:text-[#B0B0B0] italic">
                  <strong className="text-[#111111] dark:text-white">
                    Coming Soon:
                  </strong>{" "}
                  Full article content will be available shortly. This is a
                  placeholder for the complete blog post.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mt-12 mb-4">
                Overview
              </h2>
              <p className="text-[#666666] dark:text-[#B0B0B0] mb-6 leading-relaxed">
                This article will dive deep into the topic, providing actionable
                insights and real-world examples. Stay tuned for the complete
                content.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white mt-12 mb-4">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside text-[#666666] dark:text-[#B0B0B0] space-y-2 mb-6">
                <li>Practical strategies you can implement immediately</li>
                <li>Real-world case studies and results</li>
                <li>Step-by-step implementation guide</li>
                <li>Common pitfalls and how to avoid them</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-[#F8F9FA] dark:bg-[#111111] border-t border-[#E5E5E5] dark:border-[#333333]">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#111111] dark:text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#B0B0B0] mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
