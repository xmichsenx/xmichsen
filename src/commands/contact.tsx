import type { ReactNode } from "react";
import type { CVData } from "../types";
import { Section, ExternalLink } from "../components/OutputFormatters";

export const CONTACT_COMMAND = "contact";

export function contact(data: CVData): ReactNode {
  return (
    <Section title="Contact">
      {data.contact.map((entry, i) => (
        <div key={i} style={{ marginBottom: 4 }}>
          <span
            style={{
              color: "var(--terminal-muted)",
              width: 100,
              display: "inline-block",
            }}
          >
            {entry.label}:
          </span>{" "}
          {entry.url ? (
            <ExternalLink href={entry.url}>{entry.value}</ExternalLink>
          ) : (
            <span>{entry.value}</span>
          )}
        </div>
      ))}
    </Section>
  );
}
