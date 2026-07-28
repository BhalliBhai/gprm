export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-to-create-github-profile-readme-2026",
    title: "How to Create a GitHub Profile README in 2026 (Complete Guide)",
    description: "An up-to-date, step-by-step guide to setting up the special repository, using AI bios, choosing tech icons, and designing a stunning developer profile.",
    publishDate: "2026-07-28",
    readTime: "6 min read",
    tags: ["Tutorial", "GitHub", "Developer Branding"],
    faqs: [
      {
        question: "How do I make my GitHub profile show a README?",
        answer: "Create a public repository named exactly after your GitHub username, add a README.md file in the root, and GitHub will automatically render it at the top of your profile."
      },
      {
        question: "Why isn't my profile README showing up on my dashboard?",
        answer: "Double check that the repository name matches your username exactly (including casing), the repository is set to public, and the file is named README.md in the root directory."
      },
      {
        question: "Can I use external badges or statistics in my README?",
        answer: "Yes, you can include external stats cards and tech badges by embedding their Markdown or HTML image URLs, which GPRM does for you automatically."
      }
    ]
  },
  {
    slug: "github-profile-readme-ideas-recruiters-attention",
    title: "5 GitHub Profile README Ideas That Actually Get Recruiters' Attention",
    description: "Tired of boring profiles? Here are 15 actionable design layout ideas, content sections, and templates that make hiring managers stop and read.",
    publishDate: "2026-07-27",
    readTime: "5 min read",
    tags: ["Inspiration", "Career", "Design"],
    faqs: [
      {
        question: "What makes a GitHub profile README stand out to recruiters?",
        answer: "A clear value proposition in your bio, a structured summary of your core tech stack, links to 2-3 key projects with descriptions, and active contribution stats."
      },
      {
        question: "How long should my profile README be?",
        answer: "Keep it concise. Recruiters typically spend less than 30 seconds skimming a profile. Aim for a layout that fits within 1-2 screen scrolls."
      },
      {
        question: "Should I include my resume in my GitHub README?",
        answer: "Yes, adding a direct PDF download link or a stylized link to your online portfolio/resume is highly recommended to help recruiters contact you."
      }
    ]
  },
  {
    slug: "github-stats-cards-streaks-explained",
    title: "GitHub Stats Cards Explained: Streaks, Top Languages, and What They Measure",
    description: "Demystify GitHub stats cards. Learn how they count commits, pull requests, languages, and streaks, and how to configure them for maximum impact.",
    publishDate: "2026-07-25",
    readTime: "4 min read",
    tags: ["GitHub", "Analytics", "Widgets"],
    faqs: [
      {
        question: "How are GitHub top languages calculated?",
        answer: "Top languages are calculated based on the bytes of code written in your public repositories. You can exclude specific repositories or languages using query parameters."
      },
      {
        question: "Why is my commit streak showing as zero?",
        answer: "GitHub streak widgets rely on your public contributions. Ensure that your commits are made using an email address associated with your GitHub account."
      }
    ]
  },
  {
    slug: "gprm-vs-manual-markdown-readme-generator",
    title: "GPRM vs Manual Markdown: Is It Worth Using a README Generator?",
    description: "Compare manual Markdown editing with GPRM. Analyze speed, layout flexibility, automated stats widgets, and ease of maintenance for developer profiles.",
    publishDate: "2026-07-22",
    readTime: "5 min read",
    tags: ["Comparison", "Markdown", "Tools"],
    faqs: [
      {
        question: "What is the benefit of a visual README generator like GPRM?",
        answer: "It eliminates syntax errors, saves hours of manual formatting, provides instant previews, and aggregates assets like tech icons and stats cards into one interface."
      },
      {
        question: "Can I customize the generated Markdown code manually later?",
        answer: "Absolutely. GPRM outputs standard Markdown, allowing you to copy the code and add any custom HTML or Markdown elements at any time."
      }
    ]
  },
  {
    slug: "add-devto-medium-blog-posts-automatically",
    title: "How to Add Dev.to or Medium Blog Posts to Your GitHub Profile Automatically",
    description: "Keep your GitHub profile fresh. Discover how to use GitHub Actions to pull your latest blog articles into your profile README automatically.",
    publishDate: "2026-07-18",
    readTime: "4 min read",
    tags: ["Automation", "Blogging", "GitHub Actions"],
    faqs: [
      {
        question: "How do I dynamically fetch my blog posts into my profile README?",
        answer: "You can set up a GitHub Action (like blog-post-workflow) that runs on a schedule, reads your blog's RSS feed, and updates a comment placeholder block in your README.md."
      },
      {
        question: "Does GPRM support dynamic blog integrations?",
        answer: "GPRM generates the initial markdown layout with designated sections for blog posts, which you can easily link with automated GitHub workflows."
      }
    ]
  },
  {
    slug: "best-practices-github-profile-readme-students",
    title: "Best Practices for GitHub Profile READMEs for Students and New Developers",
    description: "A tailored guide for computer science students and self-taught developers. Learn what to highlight when you don't have years of work experience.",
    publishDate: "2026-07-15",
    readTime: "5 min read",
    tags: ["Students", "Career Advice", "GitHub"],
    faqs: [
      {
        question: "What should a student with no professional experience put on their README?",
        answer: "Focus on your academic or self-guided projects, core learning path, hackathon participations, open source contributions, and your willingness to learn."
      },
      {
        question: "Is it okay to list languages I am currently learning?",
        answer: "Yes, but clearly categorize them as 'Currently Learning' to manage expectations and demonstrate proactive growth."
      }
    ]
  }
];
