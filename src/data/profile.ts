import type { Profile, SocialLink } from "../types";

export const profile: Profile = {
    name: "Marvin Dore",
    title: "Full Stack Software Engineer",
    bio: "I build AI-powered software and share what I learn on YouTube and here on the blog.",
    avatar: "/avatar.webp",
    avatarAlt: "Marvin Dore",
    email: "hi@marvindore.com",
    valueProp: "AI engineering tutorials on YouTube, with the code and write-ups right here.",
};

export const socials: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/marvindore", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marvindore", icon: "linkedin" },
    { label: "YouTube", href: "https://youtube.com/@marvindore", icon: "youtube" },
    { label: "X", href: "https://x.com/bymarvindore", icon: "x" },
    { label: "Instagram", href: "https://instagram.com/bymarvindore", icon: "instagram" },
    { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
