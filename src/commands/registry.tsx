import type { ReactNode } from "react";
import type { CVData, CommandDefinition } from "../types";
import { about, ABOUT_COMMAND } from "./about";
import { experience, EXPERIENCE_COMMAND } from "./experience";
import { education, EDUCATION_COMMAND } from "./education";
import { skills, SKILLS_COMMAND } from "./skills";
import { contact, CONTACT_COMMAND } from "./contact";
import { projects, PROJECTS_COMMAND } from "./projects";
import { help, HELP_COMMAND } from "./help";

const CLEAR_COMMAND = "clear";

class CommandRegistry {
  private commands = new Map<string, CommandDefinition>();

  register(definition: CommandDefinition): void {
    this.commands.set(definition.name, definition);
  }

  get(name: string): CommandDefinition | undefined {
    return this.commands.get(name);
  }

  getAll(): CommandDefinition[] {
    return Array.from(this.commands.values());
  }

  has(name: string): boolean {
    return this.commands.has(name);
  }

  getSuggestion(input: string): string | null {
    const names = Array.from(this.commands.keys());
    return (
      names.find((name) => name.startsWith(input)) ??
      names.find((name) => name.includes(input)) ??
      null
    );
  }
}

export const commandRegistry = new CommandRegistry();

// ── Register all commands ─────────────────────────────────────────

commandRegistry.register({
  name: HELP_COMMAND,
  description: "List all available commands",
  handler: () => help(),
});

commandRegistry.register({
  name: ABOUT_COMMAND,
  description: "About me — who I am and what I do",
  handler: (data: CVData) => about(data),
});

commandRegistry.register({
  name: EXPERIENCE_COMMAND,
  description: "Work experience timeline",
  handler: (data: CVData) => experience(data),
});

commandRegistry.register({
  name: EDUCATION_COMMAND,
  description: "Education history",
  handler: (data: CVData) => education(data),
});

commandRegistry.register({
  name: SKILLS_COMMAND,
  description: "Skills and technologies",
  handler: (data: CVData) => skills(data),
});

commandRegistry.register({
  name: CONTACT_COMMAND,
  description: "Contact information and social links",
  handler: (data: CVData) => contact(data),
});

commandRegistry.register({
  name: PROJECTS_COMMAND,
  description: "Personal and open-source projects",
  handler: (data: CVData) => projects(data),
});

commandRegistry.register({
  name: CLEAR_COMMAND,
  description: "Clear the terminal screen",
  handler: () => null, // handled specially in useTerminal
});

// ── Execute a command ─────────────────────────────────────────────

export function executeCommand(
  input: string,
  data: CVData,
): { output: ReactNode; clear: boolean } {
  const trimmed = input.trim().toLowerCase();

  if (trimmed === "") {
    return { output: null, clear: false };
  }

  if (trimmed === CLEAR_COMMAND) {
    return { output: null, clear: true };
  }

  const definition = commandRegistry.get(trimmed);

  if (definition) {
    return { output: definition.handler(data), clear: false };
  }

  // Unknown command
  const suggestion = commandRegistry.getSuggestion(trimmed);
  const errorMessage = (
    <div>
      <span style={{ color: "var(--terminal-error)" }}>
        bash: command not found: {trimmed}
      </span>
      {suggestion && (
        <div style={{ color: "var(--terminal-muted)" }}>
          Did you mean:{" "}
          <span style={{ color: "var(--terminal-fg-bright)" }}>
            {suggestion}
          </span>
          ?
        </div>
      )}
      <div style={{ color: "var(--terminal-muted)" }}>
        Type <span style={{ color: "var(--terminal-fg-bright)" }}>help</span> to
        see available commands.
      </div>
    </div>
  );

  return { output: errorMessage, clear: false };
}
