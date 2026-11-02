declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";

  export const metadata: Record<string, unknown>;
  export default function MDXComponent(props: MDXProps): JSX.Element;
}
