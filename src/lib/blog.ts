import { generatedBlogPosts } from "../generated-blog-posts";

export interface BlogFrontMatter {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  slug: string;
  excerpt?: string;
}

export interface BlogPost extends BlogFrontMatter {
  readingTime: string;
}

export function getAllPosts(): BlogPost[] {
  return generatedBlogPosts
    .map(({ slug, metadata, wordCount }) => {
      return {
        title: String(metadata.title ?? "Untitled Post"),
        description: String(metadata.description ?? ""),
        date: String(metadata.date ?? metadata.publishDate ?? new Date().toISOString()),
        coverImage: String(metadata.coverImage ?? ""),
        tags: Array.isArray(metadata.tags) ? metadata.tags.map(String) : [],
        slug,
        readingTime: `${Math.max(1, Math.round(wordCount / 200))} min read`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostComponent(slug: string) {
  return generatedBlogPosts.find((post) => post.slug === slug)?.component;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const matchingTagsA = a.tags.filter((tag) => current.tags.includes(tag)).length;
      const matchingTagsB = b.tags.filter((tag) => current.tags.includes(tag)).length;
      if (matchingTagsB !== matchingTagsA) return matchingTagsB - matchingTagsA;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}
