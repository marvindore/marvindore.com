---
name: blog-from-transcript
description: Turn a pasted YouTube transcript into an edited companion blog post for marvindore.com (Astro content collection). Use when the user pastes a video transcript, or says "write a blog post for my latest video", or invokes /blog-from-transcript. Produces a structured article in the creator's voice, not a word-for-word script.
---

# Blog post from a YouTube transcript

Write a **companion article** for one of Marvin's YouTube videos. The goal is a post that ranks on Google for the video's topic and sends readers to the video and channel. It must give a reader something the video alone does not. It must never read like the script.

## Why this shape (do not skip)

- A raw transcript reads poorly and is weak SEO. An edited, restructured article is treated as original content.
- YouTube and Google are separate search engines. The video earns subscribers and watch time. The post earns Google traffic for the same topic.
- Embed the video in the post and link both ways.

## Inputs to collect

1. **The transcript.** Pasted text, or a path to an `.srt`/`.sbv`/`.txt` file. Auto-captions contain errors, so treat them as untrusted.
2. **The video ID** (the part after `v=`) or the full URL. If missing, ask. Do not guess. Check `src/lib/video` only if the user says "my latest video".
3. **The video description**, if the user has it. It is the best source for correct product names, sponsorship status and links.
4. **Extra facts the video can't carry** (all optional): price paid and where bought, photos, specs, buy or affiliate links, alternatives, a version or date. Ask for these **once**, briefly, in a single message. If the user skips them, continue without.

## Hard rules

- **Never invent facts.** No specs, prices, links, benchmarks, dates or quotes that are not in the transcript, the description or the user's answers. If a section needs facts you don't have, omit the section and list it under "Suggested additions" in your report.
- **Keep Marvin's voice**: first person, plain, direct. Tighten, don't sanitize. Never write "the speaker".
- **Not verbatim.** Remove filler, repetition, tangents and "like and subscribe" lines. Reorder if it reads better. Keep the opinions and conclusions exactly as he stated them.
- **Fix caption errors** using context (product names, jargon, homophones). List every correction you were not certain about in your report so he can confirm.
- **Disclosures.** If the video or description says it is not sponsored, say so in the post. If any affiliate link is included, add a one-line disclosure above the first link. Do not add affiliate links that were not provided.
- **Do not copy** channel-promo boilerplate, old social handles or links from the description into the post.

## Article structure

Use only the parts you have real content for, in roughly this order:

1. **Opening (2-4 sentences)** that states the answer or main takeaway and who the post is for. Lead with what a searcher wants.
2. **Quick specs table**, if there are 4+ concrete specs or facts. Markdown table, two columns.
3. **Who it's for / who should skip it**, only if the transcript supports it.
4. **Main body** as `##` sections, one per idea or reason in the video. Short paragraphs, bullets for lists, `###` only when a section has sub-points.
5. **Timestamps**, only if the transcript has timecodes: a short list linking into the video as `[0:45 Unboxing](https://www.youtube.com/watch?v=VIDEO_ID&t=45s)`. Skip if there are no timecodes.
6. **FAQ**, 3-5 questions a searcher would plausibly type, answered **only** from what was said. Omit if the transcript can't answer them.
7. **Closing**: one short takeaway. If Marvin asked viewers to comment, keep one line inviting them to comment on the video. Do not add a subscribe line: the site appends a Subscribe box to every post automatically.

Length follows the content. Typically 500-1,200 words. Do not pad.

## SEO and metadata

- **Title**: natural, includes the primary search phrase the video targets (for example, "best 65% keyboard for programming"). Use the video's own title unless it is clickbait with no searchable phrase. Then keep the topic and mention it.
- **Description**: one sentence, 120-160 characters, what the reader will learn.
- **Tags**: 2-5, lowercase, specific.
- **File name**: kebab-case slug from the primary phrase, for example `best-keyboard-for-programming.md`.
- Reuse the same keywords as the video title and description so both rank for the same topic.

## Frontmatter (must match `src/content.config.ts`)

Create `src/content/blog/<slug>.md`:

```md
---
title: "..."
description: "..."
pubDate: YYYY-MM-DD        # today's date unless the user gives the publish date
youtubeId: "VIDEO_ID"      # renders the click-to-load video at the top
tags: ["...", "..."]
draft: false
---
```

Set `draft: true` and tell the user if anything in the post still needs their input (an unconfirmed correction, a missing disclosure). Drafts do not publish.

## Steps

1. Collect inputs (ask once for anything missing).
2. Clean the transcript: fix caption errors, note uncertain ones.
3. Outline: list the video's main points, then choose which structure parts have real content.
4. Write the post to `src/content/blog/<slug>.md`.
5. Run `pnpm build` and confirm it passes. If the dev server is easy to start, preview `/blog/<slug>` at phone width.
6. **Do not commit** unless the user asks.

## Report back (keep it short)

- Path and URL of the new post.
- **Caption corrections** you made, flagging any you are unsure about.
- **Suggested additions** that need his input (photos, price, links, specs, FAQ answers) and why each helps.
- **Cross-linking checklist**, with the exact text filled in:
  - Video description line: `Written breakdown: https://marvindore.com/blog/<slug>`
  - Suggested pinned comment: one sentence plus the same link.
  - Mention it in the end screen or outro if he uses one.
