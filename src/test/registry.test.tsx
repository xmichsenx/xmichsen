import { describe, it, expect } from "vitest";
import { commandRegistry, executeCommand } from "../commands/registry";
import { cv } from "../data/cv";

describe("CommandRegistry", () => {
  it("has all expected commands registered", () => {
    const names = commandRegistry.getAll().map((c) => c.name);
    expect(names).toContain("help");
    expect(names).toContain("about");
    expect(names).toContain("experience");
    expect(names).toContain("education");
    expect(names).toContain("skills");
    expect(names).toContain("contact");
    expect(names).toContain("projects");
    expect(names).toContain("clear");
  });

  it("retrieves a registered command by name", () => {
    const cmd = commandRegistry.get("about");
    expect(cmd).toBeDefined();
    expect(cmd!.name).toBe("about");
    expect(cmd!.description).toBeTruthy();
  });

  it("returns undefined for unregistered commands", () => {
    expect(commandRegistry.get("nonexistent")).toBeUndefined();
  });

  it("reports existence with has()", () => {
    expect(commandRegistry.has("help")).toBe(true);
    expect(commandRegistry.has("nonexistent")).toBe(false);
  });

  it("suggests a command for partial input", () => {
    expect(commandRegistry.getSuggestion("ab")).toBe("about");
    expect(commandRegistry.getSuggestion("exp")).toBe("experience");
    expect(commandRegistry.getSuggestion("sk")).toBe("skills");
  });

  it("suggests a command when input is contained in a name", () => {
    expect(commandRegistry.getSuggestion("duc")).toBe("education");
  });

  it("returns null when no suggestion matches", () => {
    expect(commandRegistry.getSuggestion("zzz")).toBeNull();
  });
});

describe("executeCommand", () => {
  it("returns output for a valid command", () => {
    const result = executeCommand("about", cv);
    expect(result.output).not.toBeNull();
    expect(result.clear).toBe(false);
  });

  it("is case-insensitive", () => {
    const result = executeCommand("ABOUT", cv);
    expect(result.output).not.toBeNull();
    expect(result.clear).toBe(false);
  });

  it("trims whitespace from input", () => {
    const result = executeCommand("  skills  ", cv);
    expect(result.output).not.toBeNull();
    expect(result.clear).toBe(false);
  });

  it("returns clear flag for 'clear' command", () => {
    const result = executeCommand("clear", cv);
    expect(result.output).toBeNull();
    expect(result.clear).toBe(true);
  });

  it("returns null output for empty input", () => {
    const result = executeCommand("", cv);
    expect(result.output).toBeNull();
    expect(result.clear).toBe(false);
  });

  it("returns error output for unknown commands", () => {
    const result = executeCommand("foobar", cv);
    expect(result.output).not.toBeNull();
    expect(result.clear).toBe(false);
  });
});
