import type { LinkItem } from "../types";

export const isExternal = (href: string): boolean => /^https?:\/\//.test(href);

const FRESH_DAYS = 30;

/** Marks the blog link "New" when a post was published recently. Pure: returns a new list. */
export function withFreshness(links: LinkItem[], latestPostDate: Date | undefined, now = new Date()): LinkItem[] {
    if (!latestPostDate) return links;
    const ageDays = (now.valueOf() - latestPostDate.valueOf()) / 86_400_000;
    if (ageDays > FRESH_DAYS) return links;
    return links.map((l) => (l.href === "/blog" ? { ...l, badge: "New" } : l));
}
