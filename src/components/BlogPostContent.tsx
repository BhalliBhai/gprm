import { createElement } from "react";
import mdxComponents from "../mdx-components";
import { getBlogPostComponent } from "../lib/blog";

interface BlogPostContentProps {
  slug: string;
}

export default async function BlogPostContent({ slug }: BlogPostContentProps) {
  const Post = getBlogPostComponent(slug);
  if (!Post) {
    throw new Error(`No MDX component found for blog post "${slug}".`);
  }

  return createElement(Post, { components: mdxComponents });
}
