import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, newest first. Pages depend on this, never on the collection directly. */
export async function getPosts(): Promise<Post[]> {
    const posts = await getCollection("blog", ({ data }) => !data.draft);
    return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLatestPosts(count: number): Promise<Post[]> {
    return (await getPosts()).slice(0, count);
}
