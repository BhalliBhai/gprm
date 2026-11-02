import mdxComponents from "../mdx-components";

interface BlogPostContentProps {
  slug: string;
}

export default async function BlogPostContent({ slug }: BlogPostContentProps) {
  const { default: Post } = await import(`../content/blog/${slug}.mdx`);
  return <Post components={mdxComponents} />;
}
