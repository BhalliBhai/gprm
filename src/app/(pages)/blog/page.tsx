import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Developer Blogging & GitHub Guides | GPRM Blog",
  description:
    "Guides, tips, and tutorials about GitHub profiles, README design, developer branding, and career advancement for software engineers.",
  alternates: { canonical: "https://gprm.bhalli.dev/blog" },
  openGraph: {
    title: "Developer Blogging & GitHub Guides | GPRM Blog",
    description:
      "Articles, layouts, and best practices to optimize your developer presence, write AI bios, and stand out on GitHub.",
    url: "https://gprm.bhalli.dev/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gprm.bhalli.dev/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://gprm.bhalli.dev/blog" }
    ]
  };

  return (
    <main className="container mx-auto min-h-screen bg-slate-50 dark:bg-background-dark/30 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-slate-200 dark:border-primary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
            Articles & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            The GPRM <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">Blog</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stay ahead with technical guides, design inspiration, and optimization tips to build a powerful developer presence on GitHub.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4 font-semibold">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-primary/5 border border-slate-200 dark:border-primary/10 text-slate-600 dark:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:brightness-110"
                >
                  Read Article <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
