import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Terminal } from "../components/Terminal";

describe("Terminal component", () => {
  it("renders the welcome message on mount", () => {
    render(<Terminal />);
    expect(
      screen.getByText(/Welcome to my interactive CV/),
    ).toBeInTheDocument();
    expect(screen.getByText(/help/)).toBeInTheDocument();
  });

  it("renders the terminal chrome with title", () => {
    render(<Terminal />);
    expect(screen.getByText("visitor@cv — bash")).toBeInTheDocument();
  });

  it("has a focused input field", () => {
    render(<Terminal />);
    const input = screen.getByRole("textbox", { name: /terminal input/i });
    expect(input).toBeInTheDocument();
  });

  it("executes a command when Enter is pressed", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByRole("textbox", { name: /terminal input/i });

    await user.type(input, "about{Enter}");

    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("shows error for unknown commands", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByRole("textbox", { name: /terminal input/i });

    await user.type(input, "foobar{Enter}");

    expect(screen.getByText(/command not found: foobar/)).toBeInTheDocument();
  });

  it("clears terminal on 'clear' command", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByRole("textbox", { name: /terminal input/i });

    // First add some output
    await user.type(input, "about{Enter}");
    expect(screen.getByText("About Me")).toBeInTheDocument();

    // Then clear
    await user.type(input, "clear{Enter}");
    expect(screen.queryByText("About Me")).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Welcome to my interactive CV/),
    ).not.toBeInTheDocument();
  });

  it("renders projects command output", async () => {
    const user = userEvent.setup();
    render(<Terminal />);
    const input = screen.getByRole("textbox", { name: /terminal input/i });

    await user.type(input, "projects{Enter}");

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Terminal CV")).toBeInTheDocument();
  });
});
