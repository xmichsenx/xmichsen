import type { ReactNode } from "react";
import type { CVData } from "../types";
import { Section, TimelineEntry } from "../components/OutputFormatters";

export const EXPERIENCE_COMMAND = "experience";

export function experience(data: CVData): ReactNode {
  return (
    <Section title="Work Experience">
      {data.experience.map((entry, i) => (
        <TimelineEntry
          key={i}
          role={entry.role}
          company={entry.company}
          location={entry.location}
          period={entry.period}
          points={entry.points}
        />
      ))}
    </Section>
  );
}
