import type { ReactNode } from "react";
import type { CVData } from "../types";
import { Section, SkillBar } from "../components/OutputFormatters";

export const SKILLS_COMMAND = "skills";

export function skills(data: CVData): ReactNode {
  return (
    <Section title="Skills & Technologies">
      {data.skills.map((category, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <div style={{ color: "var(--terminal-accent)", marginBottom: 4 }}>
            [{category.category}]
          </div>
          {category.items.map((skill, j) => (
            <SkillBar key={j} name={skill.name} level={skill.level} />
          ))}
        </div>
      ))}
    </Section>
  );
}
