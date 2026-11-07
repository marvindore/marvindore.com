import type { EducationEntry, ExperienceEntry, Profile, ResumeMeta, SkillGroup, SocialLink } from "../../types";

interface PersonSchemaInput {
    siteUrl: string;
    profile: Profile;
    socials: SocialLink[];
    meta: ResumeMeta;
    experience: ExperienceEntry[];
    education: EducationEntry[];
    skills: SkillGroup[];
}

/** schema.org Person, built from the same data the page renders so the two never drift apart. */
export function buildPersonSchema(input: PersonSchemaInput): Record<string, unknown> {
    const { siteUrl, profile, socials, meta, experience, education, skills } = input;
    const current = experience[0];
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: meta.headline,
        url: siteUrl,
        email: profile.email,
        image: new URL(profile.avatar, siteUrl).href,
        sameAs: socials.map((s) => s.href).filter((href) => /^https?:\/\//.test(href)),
        ...(current && { worksFor: { "@type": "Organization", name: current.company } }),
        alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
        knowsAbout: skills.flatMap((group) => group.items),
    };
}

/** Serializes for a <script type="application/ld+json"> tag without letting "<" end the script early. */
export const toJsonLd = (data: Record<string, unknown>): string => JSON.stringify(data).replace(/</g, "\\u003c");
