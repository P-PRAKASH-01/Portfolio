import { TimelineMilestone } from "@/types";

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: "milestone-2024",
    year: "2024",
    phase: "PHASE 01",
    badge: "ACADEMIC GENESIS",
    title: "Beginning of College Journey & Programming Fundamentals",
    description:
      "Commencement of Bachelor's degree in Computer Science Engineering (AIML). Established core fundamentals in computational logic, object-oriented programming, and algorithms.",
    highlights: [
      "Core Programming Fundamentals",
      "Python & Java Object Orientation",
      "Algorithmic Thinking & Mathematics",
    ],
    position: {
      quadrant: "upper-left",
      side: "above",
    },
  },
  {
    id: "milestone-2025",
    year: "2025",
    phase: "PHASE 02",
    badge: "SYSTEMS BUILDER",
    title: "Full-Stack Development, Technical Projects & Practical Learning",
    description:
      "Expansion into modern full-stack web engineering. Architected responsive client applications, integrated relational database models, and constructed practical web software.",
    highlights: [
      "Modern Frontend Frameworks",
      "Full-Stack Web Engineering",
      "Database Modeling & API Integration",
    ],
    position: {
      quadrant: "upper-right",
      side: "below",
    },
  },
  {
    id: "milestone-2026",
    year: "2026",
    phase: "PHASE 03",
    badge: "ACCELERATION & SCALE",
    title: "Internships, Hackathons, Certifications & Major Project Development",
    description:
      "Active engagement in national hackathons (CODIENYCH 1.0, SDG NGP AI Innovate), technical credentials (AWS Cloud, Samsung Innovation, NPTEL), and aerospace/AI simulation platforms.",
    highlights: [
      "24-Hour Competitive Hackathons",
      "AWS & Samsung Innovation Credentials",
      "Aerospace & AI Applied Systems",
    ],
    position: {
      quadrant: "lower-right",
      side: "above",
    },
  },
  {
    id: "milestone-2027",
    year: "2027",
    phase: "PHASE 04",
    badge: "FUTURE HORIZON // UPCOMING",
    title: "Future Career Goals & Professional Development",
    description:
      "Transition into professional industry engineering. Targeting high-impact software engineering, scalable cloud infrastructure, and intelligent AI-integrated applications.",
    highlights: [
      "Enterprise Software Engineering",
      "Production-Scale System Design",
      "Continuous Professional Mastery",
    ],
    isUpcoming: true,
    position: {
      quadrant: "lower-left",
      side: "below",
    },
  },
];
