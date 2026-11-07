export interface IconDefinition {
    viewBox: string;
    kind: "fill" | "stroke";
    path: string;
}

export interface Profile {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    avatarAlt: string;
    email: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

export interface LinkItem {
    title: string;
    description?: string;
    href: string;
    icon: string;
    /** Highlighted style for the single most important call to action. */
    featured?: boolean;
}

export interface YouTubeChannel {
    handle: string;
    name: string;
    description: string;
    href: string;
}

export interface ResumeEntry {
    role: string;
    company: string;
    period: string;
    location: string;
    summary?: string;
    highlights: string[];
}

export interface ResumeData {
    headline: string;
    achievements: { label: string; detail: string }[];
    skills: string[];
    experience: ResumeEntry[];
    education: { school: string; period: string; degree: string; focus: string }[];
    pdfHref: string;
    pdfFilename: string;
}
