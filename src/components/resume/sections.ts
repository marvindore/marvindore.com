import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { education, experience, highlights, skills } from "../../data/resume";
import EducationList from "./EducationList.astro";
import ExperienceList from "./ExperienceList.astro";
import HighlightList from "./HighlightList.astro";
import SkillGroups from "./SkillGroups.astro";

export interface ResumeSection {
    /** Anchor id and nav target. */
    id: string;
    title: string;
    component: AstroComponentFactory;
    props: Record<string, unknown>;
}

/**
 * The resume page renders this list top to bottom, and the section nav is built from it.
 *
 * - Reorder or hide a section: move or delete its line.
 * - Add a section (e.g. Projects, Certifications): create `src/data/resume/<name>.ts`,
 *   a small component that renders it, and add one entry here.
 */
export const resumeSections: ResumeSection[] = [
    { id: "highlights", title: "Highlights", component: HighlightList, props: { items: highlights } },
    { id: "experience", title: "Experience", component: ExperienceList, props: { items: experience } },
    { id: "skills", title: "Skills", component: SkillGroups, props: { groups: skills } },
    { id: "education", title: "Education", component: EducationList, props: { items: education } },
];
