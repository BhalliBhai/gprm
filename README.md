# GPRM - GitHub Profile README Generator

GPRM is a free, no-code tool to generate professional GitHub Profile READMEs with AI bios, 200+ tech icons, and dynamic stats cards.

## Features
- AI-generated bios (adjustable tone and length)
- 200+ tech icons and visual templates
- Stats cards and badges for GitHub activity
- Export ready-to-use README.md files

## Getting Started

First, install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy to Cloudflare Workers

This project uses OpenNext to build the Next.js app for Cloudflare Workers.

1. In the Cloudflare dashboard, go to **Workers & Pages** and create a Worker connected to this GitHub repository.
2. Set the production branch to `main`, the root directory to `/`, and the build configuration to:
   - Build command: `npm run cf:build`
   - Deploy command: `npx wrangler deploy`
   - Build environment: Node.js 22
3. Add `GEMINI_API_KEY` as a secret in the Worker’s **Settings → Variables and Secrets** if AI bio generation should be enabled. `GEMINI_MODEL` is optional; the default is `gemini-2.5-flash`.

The Worker name, assets, Cloudflare Images binding, compatibility settings, and `gprm.bhalli.dev` route are configured in [wrangler.jsonc](./wrangler.jsonc). The Next.js image component uses that binding to serve resized images; Cloudflare Images transformations may incur charges. The `bhalli.dev` zone must be available in the connected Cloudflare account. `npm run preview` can be used to test the production build locally.

Alternatively, the included GitHub Actions workflow deploys on pushes to `main`. For that workflow, add `CLOUDFLARE_API_TOKEN` as a GitHub Actions secret and `CLOUDFLARE_ACCOUNT_ID` as a repository variable. Use either that workflow or Cloudflare’s Git-connected builds for automatic deployments, not both.

### Adding a blog post

Add one `.mdx` file under `src/content/blog/`. Its filename becomes the post URL, and the next build discovers it automatically—no registry or route edits are needed. Include metadata in the file:

```mdx
export const metadata = {
  title: "Your post title",
  description: "A short summary for the blog card and search results.",
  publishDate: "2026-11-02",
  coverImage: "/images/blogs/your-post/cover.png",
  tags: ["GitHub", "Guide"],
}

# Your post title

Write the article in Markdown or MDX.
```

Place the cover image under `public/images/` (or use another valid public image path). Blog cards, article pages, metadata, and the sitemap are generated from the MDX files at build time. The prebuild step writes a static manifest of every MDX file so Cloudflare builds include all articles and their components in the Worker bundle.

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request if you notice bugs, want to suggest new features, or add tech stack icons.

## Reporting Issues
Please open an issue at https://github.com/BhalliBhai/gprm with:
- Steps to reproduce
- Screenshots or screencasts
- Browser and OS info

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
Bhalli B - [bhalli.dev](https://bhalli.dev)


# GPRM - GitHub Profile README Generator

GPRM is a free, no-code tool to generate professional GitHub Profile READMEs with AI bios, 200+ tech icons, and dynamic stats cards.

## Features

- AI-generated bios (adjustable tone and length)
- 200+ tech icons and visual templates
- Stats cards and badges for GitHub activity
- Export ready-to-use README.md files
- Getting started

Visit https://gprm.bhalli.dev
Click Generator → Fill inputs → Select template → Export README
Contributing

Contributions welcome! Open an issue for bugs or feature requests, then open a PR with a short description and tests where applicable. See CONTRIBUTING.md for guidelines.

Reporting issues

Please open an issue at https://github.com/BhalliBhai/gprm with:

Steps to reproduce
Screenshots or screencasts
Browser and OS info We appreciate minimal repros and clear error logs.
License

MIT (or your chosen license)

Contact

Bhalli B - https://bhalli.dev