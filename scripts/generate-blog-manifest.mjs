import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const postsDirectory = path.join(projectRoot, "src", "content", "blog");
const outputPath = path.join(projectRoot, "src", "generated-blog-posts.ts");

if (!fs.existsSync(postsDirectory)) {
  throw new Error(`Blog posts directory not found: ${postsDirectory}`);
}

const files = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.endsWith(".mdx"))
  .sort();

if (files.length === 0) {
  throw new Error(`No .mdx blog posts found in ${postsDirectory}`);
}

const imports = [];
const posts = [];

for (const [index, filename] of files.entries()) {
  const filePath = path.join(postsDirectory, filename);
  const source = fs.readFileSync(filePath, "utf8");

  if (!/^export\s+const\s+metadata\s*=/.test(source)) {
    throw new Error(`${filename} must export a metadata object.`);
  }

  const componentName = `BlogPost${index}`;
  const metadataName = `blogMetadata${index}`;
  const slug = filename.replace(/\.mdx$/, "");
  const content = source
    .replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};?/g, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/<\/?.+?>/g, " ");
  const wordCount = content.split(/\s+/).filter(Boolean).length;

  imports.push(
    `import ${componentName}, { metadata as ${metadataName} } from ${JSON.stringify(`./content/blog/${filename}`)};`,
  );
  posts.push(
    `  { slug: ${JSON.stringify(slug)}, metadata: ${metadataName}, component: ${componentName}, wordCount: ${wordCount} },`,
  );
}

const generatedSource = `${imports.join("\n")}\n\nexport const generatedBlogPosts = [\n${posts.join("\n")}\n];\n`;

if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, "utf8") !== generatedSource) {
  fs.writeFileSync(outputPath, generatedSource);
  console.log(`Generated blog manifest for ${files.length} posts.`);
}
