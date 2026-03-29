import type { ReactNode } from "react";
import type { CVData } from "../types";
import { Section } from "../components/OutputFormatters";

export const ABOUT_COMMAND = "about";

export function about(data: CVData): ReactNode {
  return (
    <Section title="About Me">
      <div>{data.about.summary}</div>
      <div style={{ marginTop: 8 }}>
        <span style={{ color: "var(--terminal-accent)" }}>📍 </span>
        {data.about.location}
      </div>
      {data.about.highlights.length > 0 && (
        <div style={{ marginTop: 8 }}>
          {data.about.highlights.map((h, i) => (
            <div key={i}>
              <span style={{ color: "var(--terminal-fg-dim)" }}> ▸ </span>
              {h}
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
