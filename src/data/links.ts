import type { LinkItem } from "../types";

/** Ordered top to bottom, exactly as they appear on the home page. */
export const links: LinkItem[] = [
    {
        title: "Watch on YouTube",
        description: "Tutorials and builds on both channels",
        href: "/youtube",
        icon: "youtube",
        featured: true,
    },
    { title: "Blog", description: "Articles and video walkthroughs", href: "/blog", icon: "pen" },
    { title: "Resume", description: "View online or download the PDF", href: "/resume", icon: "file-text" },
    { title: "GitHub", description: "Code and open source", href: "https://github.com/marvindore", icon: "github" },
    { title: "LinkedIn", description: "Let's connect", href: "https://www.linkedin.com/in/marvindore", icon: "linkedin" },
];
