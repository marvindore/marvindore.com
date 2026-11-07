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
    /** Outcome-focused line shown under the name on the home page. */
    valueProp: string;
}

export interface SocialLink {
    label: string;
    href: string;
    icon: string;
}

export interface LinkItem {
    title: string;
    href: string;
    icon: string;
    /** Highlighted style for the single most important call to action. */
    featured?: boolean;
    /** Small pill shown next to the title, e.g. "New". */
    badge?: string;
}

export interface YouTubeChannel {
    handle: string;
    name: string;
    description: string;
    href: string;
}

/** Top-of-page details for the resume. */
export interface ResumeMeta {
    headline: string;
    pdfHref: string;
    pdfFilename: string;
    /** Shown as "Updated Nov 2026". Bump it whenever you edit the resume. */
    updated: string;
    /** Icon names (from profile socials) shown as contact links. */
    contactIcons: string[];
}

export interface ResumeHighlight {
    /** The headline number, e.g. "97%". */
    metric: string;
    label: string;
    detail: string;
}

export interface ExperienceHighlight {
    /** Optional bold lead-in, e.g. "Payroll Engine Governance". */
    lead?: string;
    text: string;
}

export interface ExperienceEntry {
    role: string;
    company: string;
    period: string;
    location: string;
    summary?: string;
    highlights: ExperienceHighlight[];
}

export interface SkillGroup {
    name: string;
    items: string[];
}

export interface EducationEntry {
    school: string;
    period: string;
    degree: string;
    focus: string;
}
