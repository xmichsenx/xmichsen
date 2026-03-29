import type { ReactNode } from "react";

// ── CV Data Interfaces ──────────────────────────────────────────────

export interface CVData {
  name: string;
  title: string;
  asciiArt: string;
  about: AboutData;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  contact: ContactEntry[];
  projects: ProjectEntry[];
}

export interface AboutData {
  summary: string;
  location: string;
  highlights: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-5
}

export interface ContactEntry {
  label: string;
  value: string;
  url?: string;
}

export interface ProjectEntry {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

// ── Terminal Interfaces ─────────────────────────────────────────────

export interface TerminalLine {
  id: string;
  type: "input" | "output";
  content: ReactNode;
}

export interface CommandDefinition {
  name: string;
  description: string;
  handler: (data: CVData) => ReactNode;
}

export interface TerminalState {
  lines: TerminalLine[];
  currentInput: string;
  commandHistory: string[];
  historyIndex: number;
}
