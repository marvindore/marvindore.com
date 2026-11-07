import type { ExperienceEntry } from "../../types";

/** Most recent first. The first entry is treated as your current role. */
export const experience: ExperienceEntry[] = [
    {
        role: "Full Stack Software Engineer",
        company: "Ultimate Kronos Group (UKG)",
        period: "2021 – Present",
        location: "Weston, Florida",
        summary:
            "UKG is a worldwide leading provider of human capital management: HR, payroll, time and attendance, and scheduling.",
        highlights: [
            {
                lead: "AI-Driven Payroll Automation",
                text: "Led a cross-functional team building UKG's first autonomous tax configuration agent, cutting setup time by 97% with guaranteed accuracy, deployed on Google Cloud Platform and Vertex AI.",
            },
            {
                lead: "Payroll Engine Governance",
                text: "Maintained a mission-critical rule-based payroll engine handling over $500 billion in wages annually, with 100% compliance with government tax regulations for five years.",
            },
            {
                lead: "Developer Experience and AI Tools",
                text: "Automated environment setup and onboarding for a 75% reduction in ramp-up time for new tax engineers, and built a RAG-based assistant over the company's Confluence documentation.",
            },
        ],
    },
    {
        role: "Software Engineer in Test",
        company: "UKG",
        period: "2018 – 2021",
        location: "Weston, Florida",
        highlights: [
            { text: "Designed and executed test plans across the whole test pyramid, from unit and integration to end-to-end and manual testing." },
            { text: "Improved CI/CD pipelines, raising time-to-live and deployment success rate by over 45% and reducing post-deployment incidents." },
            { text: "Partnered with developers and QA to shift testing left, resulting in fewer regressions and faster iteration cycles." },
        ],
    },
    {
        role: "Security Technician",
        company: "UKG",
        period: "2017 – 2018",
        location: "Weston, Florida",
        highlights: [
            { text: "Enforced role-based access controls and security protocols on platforms handling sensitive PII, achieving full compliance." },
            { text: "Managed enterprise SSO (Okta) integrations used by over 50 million users." },
            { text: "Led security-focused technical meetings with Fortune 500 clients, improving client retention by 20%." },
        ],
    },
];
