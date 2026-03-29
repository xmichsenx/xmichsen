import type { ReactNode } from "react";
import type { CommandDefinition } from "../types";
import { commandRegistry } from "./registry";

export const HELP_COMMAND = "help";

export function help(): ReactNode {
  const commands = commandRegistry.getAll();
  const maxNameLen = Math.max(...commands.map((c) => c.name.length));

  return (
    <div>
      <div style={{ color: "var(--terminal-accent)", marginBottom: 8 }}>
        Available commands:
      </div>
      {commands.map((cmd: CommandDefinition) => (
        <div key={cmd.name} style={{ marginBottom: 2 }}>
          <span style={{ color: "var(--terminal-fg-bright)" }}>
            {"  "}
            {cmd.name.padEnd(maxNameLen + 4)}
          </span>
          <span style={{ color: "var(--terminal-muted)" }}>
            {cmd.description}
          </span>
        </div>
      ))}
      <div style={{ color: "var(--terminal-muted)", marginTop: 8 }}>
        Tip: Use ↑/↓ arrows to navigate command history
      </div>
    </div>
  );
}
