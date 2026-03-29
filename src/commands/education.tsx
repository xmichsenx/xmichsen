import type { ReactNode } from "react";
import type { CVData } from "../types";
import { Section } from "../components/OutputFormatters";

export const EDUCATION_COMMAND = "education";

export function education(data: CVData): ReactNode {
  return (
    <Section title="Education">
      {data.education.map((entry, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <div
            style={{ color: "var(--terminal-fg-bright)", fontWeight: "bold" }}
          >
            {entry.degree}
          </div>
          <div style={{ color: "var(--terminal-accent)" }}>
            {entry.institution}
          </div>
          <div style={{ color: "var(--terminal-muted)", fontStyle: "italic" }}>
            {entry.period}
          </div>
          {entry.details && (
            <div style={{ color: "var(--terminal-fg-dim)", marginTop: 4 }}>
              {entry.details}
            </div>
          )}
        </div>
      ))}
    </Section>
  );
}
