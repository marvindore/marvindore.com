import type { ResumeData } from "../types";

export const resume: ResumeData = {
    headline: "Full Stack Software Engineer",
    pdfHref: "/Marvin-Dore-Resume.pdf",
    pdfFilename: "Marvin-Dore-Resume.pdf",
    achievements: [
        { label: "Market Advantage", detail: "Built UKG's first AI tax agent, automating payroll config with 97% time savings." },
        { label: "Onboarding Transformer", detail: "Reduced tax engineer onboarding by 75% with automation and internal AI tools." },
        { label: "Compliance Guardian", detail: "Maintained a $500B+ payroll engine with zero tax violations in five years." },
        { label: "Security Stewardship", detail: "Drove PII compliance and SSO integration for 50M+ users, boosting client retention." },
    ],
    skills: [
        "Dotnet C#", "Python", "Java", "Golang", "Javascript/Typescript", "GCP/Google Vertex",
        "Git", "Linux", "Testing", "Web Api", "SQL", "Docker",
    ],
    experience: [
        {
            role: "Full Stack Software Engineer",
            company: "Ultimate Kronos Group",
            period: "2021 – Present",
            location: "Weston, Florida",
            summary: "UKG is a worldwide leading provider of human capital management: HR, payroll, time and attendance, and scheduling.",
            highlights: [
                "AI-Driven Payroll Automation: led a cross-functional team building UKG's first autonomous tax configuration agent, cutting setup time by 97% with guaranteed accuracy, deployed on Google Cloud Platform and Vertex AI.",
                "Payroll Engine Governance: maintained a mission-critical rule-based payroll engine handling over $500 billion in wages annually, with 100% compliance with government tax regulations for five years.",
                "Developer Experience and AI Tools: automated environment setup and onboarding for a 75% reduction in ramp-up time for new tax engineers, and built a RAG-based assistant over the company's Confluence documentation.",
            ],
        },
        {
            role: "Software Engineer in Test",
            company: "UKG",
            period: "2018 – 2021",
            location: "Weston, Florida",
            highlights: [
                "Designed and executed test plans across the whole test pyramid, from unit and integration to end-to-end and manual testing.",
                "Improved CI/CD pipelines, raising time-to-live and deployment success rate by over 45% and reducing post-deployment incidents.",
                "Partnered with developers and QA to shift testing left, resulting in fewer regressions and faster iteration cycles.",
            ],
        },
        {
            role: "Security Technician",
            company: "UKG",
            period: "2017 – 2018",
            location: "Weston, Florida",
            highlights: [
                "Enforced role-based access controls and security protocols on platforms handling sensitive PII, achieving full compliance.",
                "Managed enterprise SSO (Okta) integrations used by over 50 million users.",
                "Led security-focused technical meetings with Fortune 500 clients, improving client retention by 20%.",
            ],
        },
    ],
    education: [
        {
            school: "Georgia Institute of Technology",
            period: "2019 – 2022",
            degree: "Master of Science in Computer Science",
            focus: "Machine Learning",
        },
    ],
};
