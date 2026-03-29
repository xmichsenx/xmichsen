import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { about } from "../commands/about";
import { experience } from "../commands/experience";
import { education } from "../commands/education";
import { skills } from "../commands/skills";
import { contact } from "../commands/contact";
import { projects } from "../commands/projects";
import type { CVData } from "../types";

const testData: CVData = {
  name: "Test User",
  title: "Test Engineer",
  asciiArt: "TEST",
  about: {
    summary: "A test summary",
    location: "Test City",
    highlights: ["Highlight one", "Highlight two"],
  },
  experience: [
    {
      role: "Engineer",
      company: "TestCorp",
      period: "2020 – 2024",
      points: ["Achievement A", "Achievement B"],
    },
  ],
  education: [
    {
      degree: "B.Sc. Testing",
      institution: "Test University",
      period: "2016 – 2020",
      details: "Summa cum laude",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", level: 5 },
        { name: "Python", level: 3 },
      ],
    },
  ],
  contact: [
    {
      label: "Email",
      value: "test@example.com",
      url: "mailto:test@example.com",
    },
    { label: "GitHub", value: "github.com/test" },
  ],
  projects: [
    {
      name: "ProjectAlpha",
      description: "A test project",
      tech: ["React", "Node.js"],
      url: "https://github.com/test/alpha",
    },
    {
      name: "ProjectBeta",
      description: "Another project without URL",
      tech: ["Go"],
    },
  ],
};

describe("about command", () => {
  it("renders summary and location", () => {
    render(<>{about(testData)}</>);
    expect(screen.getByText("A test summary")).toBeInTheDocument();
    expect(screen.getByText(/Test City/)).toBeInTheDocument();
  });

  it("renders highlights", () => {
    render(<>{about(testData)}</>);
    expect(screen.getByText("Highlight one")).toBeInTheDocument();
    expect(screen.getByText("Highlight two")).toBeInTheDocument();
  });
});

describe("experience command", () => {
  it("renders role, company, and points", () => {
    render(<>{experience(testData)}</>);
    expect(screen.getByText("Engineer")).toBeInTheDocument();
    expect(screen.getByText("TestCorp")).toBeInTheDocument();
    expect(screen.getByText("Achievement A")).toBeInTheDocument();
    expect(screen.getByText("Achievement B")).toBeInTheDocument();
  });
});

describe("education command", () => {
  it("renders degree, institution, and details", () => {
    render(<>{education(testData)}</>);
    expect(screen.getByText("B.Sc. Testing")).toBeInTheDocument();
    expect(screen.getByText("Test University")).toBeInTheDocument();
    expect(screen.getByText("Summa cum laude")).toBeInTheDocument();
  });
});

describe("skills command", () => {
  it("renders skill categories and names", () => {
    render(<>{skills(testData)}</>);
    expect(screen.getByText("[Languages]")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
  });
});

describe("contact command", () => {
  it("renders contact entries", () => {
    render(<>{contact(testData)}</>);
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
    expect(screen.getByText("github.com/test")).toBeInTheDocument();
  });

  it("renders links for entries with URLs", () => {
    render(<>{contact(testData)}</>);
    const emailLink = screen.getByText("test@example.com").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("renders plain text for entries without URLs", () => {
    render(<>{contact(testData)}</>);
    const githubText = screen.getByText("github.com/test");
    expect(githubText.tagName).not.toBe("A");
  });
});

describe("projects command", () => {
  it("renders project names and descriptions", () => {
    render(<>{projects(testData)}</>);
    expect(screen.getByText("ProjectAlpha")).toBeInTheDocument();
    expect(screen.getByText("A test project")).toBeInTheDocument();
    expect(screen.getByText("ProjectBeta")).toBeInTheDocument();
  });

  it("renders tech stack tags", () => {
    render(<>{projects(testData)}</>);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Go")).toBeInTheDocument();
  });

  it("renders URL link when provided", () => {
    render(<>{projects(testData)}</>);
    const link = screen.getByText("https://github.com/test/alpha");
    expect(link.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/test/alpha",
    );
  });

  it("does not render URL for projects without one", () => {
    render(<>{projects(testData)}</>);
    expect(
      screen.queryByText("https://github.com/test/beta"),
    ).not.toBeInTheDocument();
  });
});
