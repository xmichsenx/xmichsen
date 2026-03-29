import type { ReactNode } from "react";
import styles from "./Formatters.module.css";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.separator}>{"─".repeat(title.length + 4)}</div>
      {children}
    </div>
  );
}

export function SkillBar({ name, level }: { name: string; level: number }) {
  const maxLevel = 5;
  return (
    <div className={styles.skillRow}>
      <span className={styles.skillName}>{name}</span>
      <div className={styles.skillBar}>
        {Array.from({ length: maxLevel }, (_, i) => (
          <span
            key={i}
            className={`${styles.skillBlock} ${
              i < level ? styles.skillBlockFilled : styles.skillBlockEmpty
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function TimelineEntry({
  role,
  company,
  location,
  period,
  points,
}: {
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}) {
  return (
    <div className={styles.timelineEntry}>
      <div>
        <span className={styles.timelineRole}>{role}</span>
        {" @ "}
        <span className={styles.timelineCompany}>{company}</span>
      </div>
      <div className={styles.timelinePeriod}>
        {period}
        {location && (
          <span className={styles.timelineLocation}>
            {" · "}
            {location}
          </span>
        )}
      </div>
      {points.map((item, i) => (
        <div key={i} className={styles.listItem}>
          <span className={styles.listBullet}> ▸ </span>
          {item}
        </div>
      ))}
    </div>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
