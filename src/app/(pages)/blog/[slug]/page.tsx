import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { blogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | GPRM Blog`,
    description: post.description,
    alternates: { canonical: `https://gprm.bhalli.dev/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | GPRM Blog`,
      description: post.description,
      url: `https://gprm.bhalli.dev/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: ["https://bhalli.dev"],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gprm.bhalli.dev/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://gprm.bhalli.dev/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://gprm.bhalli.dev/blog/${post.slug}` }
    ]
  };

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": {
      "@type": "Person",
      "name": "Bhalli B",
      "url": "https://bhalli.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GPRM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gprm.bhalli.dev/icon.svg"
      }
    },
    "mainEntityOfPage": `https://gprm.bhalli.dev/blog/${post.slug}`
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Helper to render static article contents based on slug
  const renderArticleContent = () => {
    switch (slug) {
      case "how-to-create-github-profile-readme-2026":
        return (
          <>
            <p>
              Your GitHub profile page is often the first place technical recruiters, open-source maintainers, and fellow developers look to understand who you are. By default, GitHub shows a grid of your contributions and repositories. However, you can personalize this space using a <strong>GitHub Profile README</strong>.
            </p>
            
            <h2>Prerequisite: Creating the Special Repository</h2>
            <p>
              Before styling or adding content, you must create a public repository named exactly after your username.
            </p>
            <ul>
              <li><strong>Exact Match:</strong> The repository name must match your GitHub username case-sensitively (e.g. <code>username/username</code>).</li>
              <li><strong>Public Setting:</strong> Ensure the visibility is toggled to <strong>Public</strong>.</li>
              <li><strong>Add README.md:</strong> Initialize the repository with a <code>README.md</code> file.</li>
            </ul>
            <p>
              Once created, GitHub displays a special banner confirming that you have discovered a secret feature. Anything you write in this repository&apos;s <code>README.md</code> is automatically rendered at the top of your public profile page.
            </p>

            <h2>Step 1: Outlining Your Structure</h2>
            <p>
              A great profile README balances visual elements with informative text. We suggest following this layout structure:
            </p>
            <ol>
              <li><strong>Header Banner & Introduction:</strong> A brief welcome message and your current title.</li>
              <li><strong>AI-Generated Bio:</strong> A short, focused narrative about your goals and experience.</li>
              <li><strong>Tech Stack (Toolbox):</strong> Clean, categorized icons displaying your languages and frameworks.</li>
              <li><strong>GitHub Analytics:</strong> Real-time statistics, language breakdowns, or streak indicators.</li>
              <li><strong>Contact Info:</strong> Clear links to your email, LinkedIn, portfolio, and social channels.</li>
            </ol>

            <h2>Step 2: Crafting Your Bio with AI</h2>
            <p>
              Writing about yourself can be challenging. A generic &quot;Hi, I&apos;m a developer&quot; doesn&apos;t capture your unique value. Use GPRM&apos;s integrated AI bio writer to craft a compelling summary. State your core expertise, key projects you enjoy building, and your career objectives, then select a matching tone.
            </p>

            <h2>Step 3: Styling and Embedding Stats</h2>
            <p>
              Keep your icons clean. Instead of raw text lists, use flat tech badges to represent your stack. Finally, embed dynamic stats cards. These cards fetch your commits, pull requests, and repository statistics directly from the GitHub API and render them as images. Make sure to choose only 2-3 stats widgets to ensure fast page loads.
            </p>

            <h2>Publishing Your README</h2>
            <p>
              After building your layout in GPRM, click <strong>Export</strong>. Copy the Markdown code and paste it into the <code>README.md</code> file in your special repository. Commit the changes, push them to GitHub, and your profile is updated instantly!
            </p>
          </>
        );

      case "github-profile-readme-ideas-recruiters-attention":
        return (
          <>
            <p>
              With thousands of developer profiles out there, a default GitHub page won&apos;t help you stand out. Recruiters spend a very short time looking at profiles, so your README needs to communicate your value proposition immediately.
            </p>

            <h2>1. The Minimalist Approach</h2>
            <p>
              For senior developers or those seeking high-volume recruitment, less is more. A clean layout with a one-sentence bio, a curated list of 5 key technologies, and direct links to your resume and email. Avoid flashing gifs or crowded contribution charts.
            </p>

            <h2>2. The Data-Heavy Profile</h2>
            <p>
              If your strength is open source contribution, let your stats speak. Focus on top languages, commits, PR counts, and streak cards. This shows active daily engagement and highlights your technical velocity.
            </p>

            <h2>3. The Project-Showcase Layout</h2>
            <p>
              Instead of relying on GitHub&apos;s pinned repos, design a custom grid in your README. Show a screenshot of your top 2 applications, list the stack used, and include live demo and code links. This proves you build complete products, not just code snippets.
            </p>

            <h2>4. Categorized Tech Toolbox</h2>
            <p>
              Group your tech stack into columns (e.g. Frontend, Backend, Devops, Tools) using clean, colored icons. This is much easier for recruiters to read than a messy paragraph.
            </p>

            <h2>5. The Interactive Elements</h2>
            <p>
              Include dynamic elements like a visitors counter badge, current WakaTime coding stats, or automated workflows that fetch your latest blog posts or tweets. This shows you understand devops, automation, and integrations.
            </p>
            <p>
              To implement any of these styles, head over to <Link href="/templates" className="text-primary font-bold hover:underline">GPRM Templates</Link> and select a pre-designed layout to bootstrap your profile today.
            </p>
          </>
        );

      case "github-stats-cards-streaks-explained":
        return (
          <>
            <p>
              GitHub stats cards are dynamically rendered SVG widgets that you can add to your README. They act as a live scoreboard of your public open source activities. Let&apos;s look at how they calculate your stats.
            </p>
            <h2>How Stats Cards Calculate Commits and PRs</h2>
            <p>
              The widgets query the GitHub GraphQL API to count your commits, pull requests, issues opened, and star ratings across all repositories. By default, they only track commits made in your default branch (usually <code>main</code> or <code>master</code>) and in repositories that are public.
            </p>
            <h2>Understanding the Top Languages Card</h2>
            <p>
              This card displays the percentage breakdown of the programming languages used in your repositories. The percentage is calculated based on the total bytes of code written, not the number of files. You can exclude specific repositories or hide languages you only touched briefly by configuring query parameters.
            </p>
            <h2>The Commit Streak Card</h2>
            <p>
              The streak widget counts consecutive days with at least one contribution. A contribution includes committing code, opening a PR, or merging code. Ensure your git configurations use the correct email address, otherwise GitHub won&apos;t link commits to your profile.
            </p>
          </>
        );

      case "gprm-vs-manual-markdown-readme-generator":
        return (
          <>
            <p>
              When creating a profile README, you have two choices: write raw Markdown manually, or use a visual generator tool like GPRM. Let&apos;s compare the two approaches.
            </p>
            <h2>The Manual Markdown Approach</h2>
            <p>
              Writing Markdown manually gives you absolute control over spacing, layout, and HTML tags. However, it requires you to manually look up badge URLs, copy-paste tech icon markdown, align elements, and preview using external tools. It is time-consuming and prone to syntax errors.
            </p>
            <h2>The Generator Approach</h2>
            <p>
              A visual generator like GPRM provides a no-code interface. You choose icons from a search grid, type your details, and select templates. The tool automatically aligns widgets, centers badges, and outputs clean, error-free Markdown code.
            </p>
            <h2>Which is Better?</h2>
            <p>
              For most developers, using a generator to write 90% of the README saves hours of setup. Once exported, you can still edit the Markdown manually to add custom, highly unique touches.
            </p>
          </>
        );

      case "add-devto-medium-blog-posts-automatically":
        return (
          <>
            <p>
              One way to keep your GitHub profile fresh is to automatically display your latest blog posts. Instead of updating your README manually every time you publish, you can automate this using a GitHub Action.
            </p>
            <h2>Step 1: Add Placeholders to your README</h2>
            <p>
              In your profile README.md, add comments indicating where the posts should go:
            </p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs my-4">
{`<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->`}
            </pre>
            <h2>Step 2: Create a GitHub Action Workflow</h2>
            <p>
              In your special repository, create a directory called <code>.github/workflows/</code> and add a file named <code>blog-posts.yml</code>.
            </p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs my-4">
{`name: Latest Blog Posts
on:
  schedule:
    - cron: '0 * * * *' # Runs hourly
  workflow_dispatch:

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          feed_list: "https://dev.to/feed/yourusername"`}
            </pre>
            <p>
              This action runs hourly, reads your blog&apos;s RSS feed, and updates the placeholder in your README.md.
            </p>
          </>
        );

      case "best-practices-github-profile-readme-students":
        return (
          <>
            <p>
              As a student or recent graduate, your main challenge is showing experience when you haven&apos;t held a formal developer role. A well-crafted GitHub Profile README is a powerful way to demonstrate potential.
            </p>
            <h2>1. Highlight Learning Paths</h2>
            <p>
              State clearly what you are studying, languages you are learning, and concepts you have mastered. Grouping skills into &quot;Mastered&quot; vs &quot;Currently Learning&quot; shows honesty and a proactive learning mindset.
            </p>
            <h2>2. Feature 1-2 Key Academic or Side Projects</h2>
            <p>
              Instead of listing dozens of classroom assignments, select your 2 best projects. Explain the problem they solve, the tech stack you selected, and links to live demos.
            </p>
            <h2>3. Show Active Learning and Growth</h2>
            <p>
              Embed top languages cards and commit streak cards. Even if your repositories are small, an active contribution chart proves you are writing code daily and building strong habits.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background-dark/30 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-[1rem]">arrow_back</span>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-xs font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-200 dark:border-primary/10 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs select-none">
                BB
              </div>
              <span className="font-bold text-slate-900 dark:text-white">Bhalli B</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Body Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-base sm:text-lg
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-950 [&_h2]:dark:text-white [&_h2]:mt-10 [&_h2]:mb-4
          [&_p]:mb-6
          [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:mb-6
          [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ol]:mb-6
          [&_code]:bg-slate-100 [&_code]:dark:bg-slate-800 [&_code]:text-primary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm
        ">
          {renderArticleContent()}
        </div>
      </article>

      {/* Dynamic Blog Post FAQs */}
      <FaqSection faqs={post.faqs} title="Article FAQs" />

      {/* CTA section */}
      <section className="py-12 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-linear-to-r from-primary/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 border border-primary/25 glow-effect">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-4">
            Build your README now
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Design your professional GitHub Profile README in minutes. Try GPRM for free with zero signups required.
          </p>
          <Link
            href="/generator"
            className="px-8 py-4 bg-primary text-slate-950 font-extrabold rounded-xl hover:brightness-110 shadow-lg hover:shadow-primary/20 transition-all text-sm inline-block"
          >
            Start Generator
          </Link>
        </div>
      </section>
    </main>
  );
}
