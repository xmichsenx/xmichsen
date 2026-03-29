import type { ReactNode } from "react";
import type { CVData } from "../types";
import { Section, ExternalLink } from "../components/OutputFormatters";

export const PROJECTS_COMMAND = "projects";

export function projects(data: CVData): ReactNode {
  return (
    <Section title="Projects">
      {data.projects.map((project, i) => (
        <div
          key={i}
          style={{
            marginBottom: 12,
            paddingLeft: 16,
            borderLeft: "2px solid var(--chrome-border)",
          }}
        >
          <div
            style={{ color: "var(--terminal-fg-bright)", fontWeight: "bold" }}
          >
            {project.name}
          </div>
          <div style={{ color: "var(--terminal-fg-dim)", marginTop: 2 }}>
            {project.description}
          </div>
          <div style={{ marginTop: 4 }}>
            <span style={{ color: "var(--terminal-muted)" }}>tech: </span>
            {project.tech.map((t, j) => (
              <span key={j}>
                <span style={{ color: "var(--terminal-accent)" }}>{t}</span>
                {j < project.tech.length - 1 && (
                  <span style={{ color: "var(--terminal-muted)" }}> · </span>
                )}
              </span>
            ))}
          </div>
          {project.url && (
            <div style={{ marginTop: 2 }}>
              <span style={{ color: "var(--terminal-muted)" }}>url: </span>
              <ExternalLink href={project.url}>{project.url}</ExternalLink>
            </div>
          )}
        </div>
      ))}
    </Section>
  );
}
