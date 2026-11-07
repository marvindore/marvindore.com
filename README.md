# marvindore.com

Link-in-bio style site (Astro + Cloudflare) with a blog that pairs posts with YouTube videos.

## Where things live

| Concern | Location |
| :-- | :-- |
| Profile, bio, social icons | `src/data/profile.ts` |
| Home page link buttons | `src/data/links.ts` |
| YouTube channels (`/youtube`) | `src/data/youtube.ts` |
| Resume content (`/resume`) | `src/data/resume.ts` |
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

## Commands

`pnpm dev` · `pnpm build` · `pnpm preview` · `pnpm deploy`
