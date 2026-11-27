export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

export interface ProjectPageContent {
  heading?: string;
  subheading?: string;
  abstract?: string;
  paragraphs?: string[];
  keyPoints?: { label: string; text: string }[];
  architectureSteps?: { step: string; detail: string; tag?: string }[];
  techStackDetailed?: { name: string; role: string; category: string }[];
  metrics?: { label: string; value: string; context: string }[];
  codeHighlight?: { language: string; title: string; snippet: string };
  links?: { label: string; url: string; type: "github" | "live" | "demo" }[];
}

export interface ProjectPage {
  pageNumber: number;
  chapterNumber: string;
  chapterTitle: string;
  content: ProjectPageContent;
}

export interface ProjectSpecimen {
  folioLeft: string;
  artifactTitle: string;
  paperType: string;
  image: string;
  figureCaption: string;
  gamut: string;
  quote: string;
  quoteSource: string;
  chromatics: { name: string; hex: string }[];
  editionStamp: string;
  badge: string;
  badgeBg?: string;
  badgeText?: string;
  folioRight: string;
  phase: string;
  monographTitle: string;
  role: { title: string; subtitle: string };
  cycle: { duration: string; subtitle: string };
  metric: { value: string; label: string };
  dropCap: string;
  monographParagraphs: string[];
  tags: string[];
  readingDuration: string;
}

export interface ProjectBook extends Project {
  id: string;
  volumeNumber: string;
  category: "Web Engineering" | "AI & Machine Learning" | "Aerospace Simulation" | "Environmental Systems" | "E-Commerce Systems";
  tagline: string;
  edition: string;
  theme: {
    coverBg: string;
    coverGradient: string;
    coverText: string;
    accent: string;
    spineBg: string;
    spineText: string;
    badgeBg: string;
    badgeText: string;
  };
  summary: {
    problem: string;
    solution: string;
    architecture: string;
    implementation: string;
    outcomes: string;
  };
  pages: ProjectPage[];
  specimen?: ProjectSpecimen;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface SkillItem {
  name: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  iconName: "code-2" | "layers" | "wrench";
  skills: {
    name: string;
    tech: string;
    color: string;
  }[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  phase: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  isUpcoming?: boolean;
  position: {
    side: "above" | "below";
    quadrant: "upper-left" | "upper-right" | "lower-right" | "lower-left";
  };
}
