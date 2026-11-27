import { Certificate, Project, SkillCategory, ProjectBook } from "@/types";
import { PROJECT_BOOKS } from "./projectBooks";

export const PERSONAL_INFO = {
  name: "Prakash",
  role: "Creative Developer & AIML Student",
  focus: "CSE (AIML) student passionate about web & ML. I design clean interfaces and build reliable, accessible web experiences that scale.",
  status: "Available for work",
  profileImage: "/Profile.jpeg",
  resumePath: "/assets/CV/Prakash_P.pdf",
  phone: "+91 97504 15312",
  email: "prakash5361869@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/prakash--p7",
    github: "https://github.com/P-PRAKASH-01",
    instagram: "#",
  },
  stats: {
    projects: 5,
    hackathons: 2,
    focusArea: "AIML",
  },
};

export { PROJECT_BOOKS };
export const PROJECTS: ProjectBook[] = PROJECT_BOOKS;

export const CERTIFICATES: Certificate[] = [
  {
    id: "codienych",
    title: "CODIENYCH 1.0 - 24-Hour Hackathon",
    issuer: "Erode Sengunthar Engineering College",
    year: "2026",
    image: "/certificates/CODIENYCH 1.0.jpg",
  },
  {
    id: "ngp-innovate",
    title: "SDG NGP AI Innovate 2026",
    issuer: "Dr. N.G.P. Institute of Technology",
    year: "2026",
    image: "/certificates/NGP.jpg",
  },
  {
    id: "samsung",
    title: "Coding & Programming",
    issuer: "Samsung Innovation Campus",
    year: "2026",
    image: "/certificates/Samsung.png",
  },
  {
    id: "nptel",
    title: "Introduction to Industry 4.0",
    issuer: "NPTEL",
    year: "2025",
    image: "/certificates/NPTEL.jpg",
  },
  {
    id: "iitb-java",
    title: "Spoken Tutorial for Java",
    issuer: "IIT Bombay",
    year: "2025",
    image: "/certificates/IITB Java.png",
  },
  {
    id: "iitb-rdbms",
    title: "Spoken Tutorial for RDBMS",
    issuer: "IIT Bombay",
    year: "2025",
    image: "/certificates/IITB RDBMS.png",
  },
  {
    id: "aws",
    title: "AWS Cloud Practitioner",
    issuer: "NmindsAcademy",
    year: "2025",
    image: "/certificates/AWS.png",
  },
  {
    id: "guvi",
    title: "Full Stack Development Certification",
    issuer: "GUVI Geek Network",
    year: "2025",
    image: "/certificates/GUVI.png",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "code-2",
    skills: [
      { name: "JS", tech: "JavaScript", color: "text-yellow-400" },
      { name: "Python", tech: "Python", color: "text-blue-500" },
      { name: "HTML5", tech: "HTML5", color: "text-orange-500" },
      { name: "CSS3", tech: "CSS3", color: "text-blue-600" },
    ],
  },
  {
    title: "Frameworks",
    iconName: "layers",
    skills: [
      { name: "React", tech: "React / Next.js", color: "text-cyan-400" },
      { name: "Tailwind", tech: "Tailwind CSS", color: "text-cyan-500" },
      { name: "TensorFlow", tech: "TensorFlow", color: "text-orange-400" },
      { name: "Firebase", tech: "Firebase", color: "text-yellow-500" },
    ],
  },
  {
    title: "Tools",
    iconName: "wrench",
    skills: [
      { name: "Git", tech: "Git", color: "text-orange-600" },
      { name: "GitHub", tech: "GitHub", color: "text-slate-800 dark:text-white" },
      { name: "VS Code", tech: "VS Code", color: "text-blue-500" },
      { name: "Figma", tech: "Figma", color: "text-pink-500" },
    ],
  },
];

export const EMAILJS_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "jTahTuGu5RbuBx46c",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_61rznl6",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_u7gk0zg",
};
