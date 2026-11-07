# marvindore.com

Link-in-bio style site (Astro + Cloudflare) with a blog that pairs posts with YouTube videos.

## Where things live

| Concern | Location |
| :-- | :-- |
| Profile, bio, social icons | `src/data/profile.ts` (photo: `public/avatar.webp`) |
| Home page link buttons | `src/data/links.ts` |
| YouTube channels (`/youtube`) | `src/data/youtube.ts` |
| Resume content (`/resume`) | `src/data/resume/` (one file per section) |
| Resume PDF (download button) | `public/Marvin-Dore-Resume.pdf` |
| New icons | `src/data/icons.ts` |
| Colors, radii, spacing | `src/styles/tokens.css` |

Pages only compose components; content lives in `src/data`, logic in `src/lib`.

## Adding a blog post

Create `src/content/blog/my-post.md`:

```md
---
title: "Post title"
description: "One-line summary"
pubDate: 2026-11-06
youtubeId: "VIDEO_ID"   # optional, the part after v=
tags: ["ai"]            # optional
draft: false            # optional, true hides it
---
Markdown body here.
```

Faster: run `/blog-from-transcript` in Claude Code and paste a video transcript. The skill (`.claude/skills/blog-from-transcript/SKILL.md`) writes an edited companion post, not a script.

## Commands

| Command | What it does |
| :-- | :-- |
| `pnpm dev` | Local dev server at `localhost:4321` |
| `pnpm preview` | Build and run locally in the Cloudflare runtime (`localhost:8788`) |
| `pnpm run deploy:preview` | Deploy to a test URL (`preview.<project>.pages.dev`); the live site is untouched |
| `pnpm run deploy` | Deploy to production |

Use `pnpm run deploy`, not `pnpm deploy`: the latter is a built-in pnpm command and won't run this script.

## Deploying

The site is hosted on Cloudflare Pages (project `marvindore`, build output `dist`).

### 1. Log in to Cloudflare (once per machine)

```sh
pnpm exec wrangler login
```

This opens your browser to approve access. Check with `pnpm exec wrangler whoami`.

### 2. Deploy to a test URL

```sh
pnpm run deploy:preview
```

This builds the site and uploads it as a preview at `https://preview.marvindore.pages.dev`. The live site is untouched. If the Pages project doesn't exist yet, wrangler offers to create it: accept, and set the production branch to `main`. Run the command again to update the preview.

### 3. Check the preview

- Every page: home, `/blog`, a blog post, `/resume`, `/youtube`.
- On a phone: dark mode, the theme toggle, the resume PDF download.
- A made-up URL such as `/xyz` shows the 404 page.

Share previews and canonical links always point at `marvindore.com`, so check share cards after going live.

### 4. Go live

```sh
pnpm run deploy
```

The first time, attach the domain in the Cloudflare dashboard: **Workers & Pages → marvindore → Custom domains → add `marvindore.com`**. If the domain's DNS is already on Cloudflare, this takes a couple of clicks.

### 5. After the first launch

- Submit `https://marvindore.com/sitemap-index.xml` in Google Search Console.
- Turn on Web Analytics (see [Analytics](#analytics)).
- Paste the URL into a draft post on X or LinkedIn to confirm the share card shows.

### Optional: deploy on every push

Instead of deploying by hand, connect the GitHub repo in the dashboard: **Workers & Pages → marvindore → Settings → Builds → Connect to Git**, with build command `pnpm build`, output directory `dist`, production branch `main`, and environment variable `NODE_VERSION` set to `22`. Pushes to `main` then deploy to production, and other branches get preview URLs.

## Updating the resume

Each resume section has its own data file in `src/data/resume/`, so a change is a small edit:

| To change | Edit |
| :-- | :-- |
| Job title, PDF name, "Updated" date, contact buttons | `meta.ts` |
| The four headline numbers | `highlights.ts` |
| Jobs and bullets (most recent first) | `experience.ts` |
| Skill groups | `skills.ts` |
| Degrees | `education.ts` |

Sections render in the order listed in `src/components/resume/sections.ts`, and the sticky section nav is built from the same list. To reorder or hide a section, move or delete its line. To add one (Projects, Certifications...), add a data file, a small component, and one entry there.

When you change the resume: update `meta.updated`, and replace `public/Marvin-Dore-Resume.pdf` so the download matches the page. The page also embeds schema.org `Person` data (from the same files) for search engines. It prints cleanly (Ctrl/Cmd+P) with the controls hidden.

## Theme

Light and dark follow the visitor's system setting, and the round button in the top-right corner overrides it (saved in the browser). Colors are defined once in `src/styles/tokens.css` with `light-dark()`.

## Links

The home page links live in `src/data/links.ts`. "YouTube" goes straight to `@marvindore`. `/youtube` still exists as a page listing both channels (including `@marvindoreos`) but is no longer linked from the home page.

Click tracking: elements with `data-track="..."` report through `src/lib/analytics.ts`. It is a no-op until a provider (e.g. Plausible) is installed.

The home-page "latest video" card (YouTube Data API / channel-page lookup) was removed. It is in git history at commit `c18a4f8` if you want it back.

## Sharing and SEO

- `site` in `astro.config.mjs` sets canonical and share URLs. Keep it as the production domain.
- `public/og.jpg` (1200×630) is the default share image. Blog posts use their video thumbnail instead.
- `@astrojs/sitemap` writes `sitemap-index.xml`; `public/robots.txt` points to it. Submit it in Google Search Console once.
- `src/pages/404.astro` is the not-found page.

## Analytics

Turn on **Cloudflare Web Analytics** in the Pages project (Metrics → Web Analytics → Enable). No code change is needed on Pages. Note: it reports page views, not the per-link `data-track` clicks; those need a provider that supports custom events (for example Plausible).
