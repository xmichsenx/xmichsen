import { useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import type { TerminalState } from '../types';
import { cv } from '../data/cv';
import { executeCommand } from '../commands/registry';

let lineIdCounter = 0;

function createLineId(): string {
  return `line-${++lineIdCounter}`;
}

function createWelcomeMessage(): ReactNode {
  return (
    <div>
      <pre style={{ color: 'var(--terminal-fg)', margin: 0, fontSize: '10px', lineHeight: 1.2 }}>
        {cv.asciiArt}
      </pre>
      <div style={{ marginTop: 8, color: 'var(--terminal-fg-bright)' }}>
        {cv.title}
      </div>
      <div style={{ color: 'var(--terminal-muted)', marginTop: 4 }}>
        Welcome to my interactive CV. Type{' '}
        <span style={{ color: 'var(--terminal-fg-bright)' }}>help</span> to see
        available commands.
      </div>
      <div style={{ color: 'var(--terminal-muted)', marginBottom: 4 }}>
        {'─'.repeat(60)}
      </div>
    </div>
  );
}

const initialState: TerminalState = {
  lines: [
    {
      id: createLineId(),
      type: 'output',
      content: createWelcomeMessage(),
    },
  ],
  currentInput: '',
  commandHistory: [],
  historyIndex: -1,
};

export function useTerminal() {
  const [state, setState] = useState<TerminalState>(initialState);

  const setInput = useCallback((value: string) => {
    setState((prev) => ({ ...prev, currentInput: value, historyIndex: -1 }));
  }, []);

  const handleInput = useCallback((input: string) => {
    const trimmed = input.trim();

    setState((prev) => {
      const { output, clear } = executeCommand(trimmed, cv);

      const newHistory =
        trimmed !== '' ? [trimmed, ...prev.commandHistory] : prev.commandHistory;

      if (clear) {
        return {
          lines: [],
          currentInput: '',
          commandHistory: newHistory,
          historyIndex: -1,
        };
      }

      const newLines = [...prev.lines];

      // Add the input line (echo the command)
      newLines.push({
        id: createLineId(),
        type: 'input',
        content: trimmed,
      });

      // Add output if any
      if (output) {
        newLines.push({
          id: createLineId(),
          type: 'output',
          content: output,
        });
      }

      return {
        lines: newLines,
        currentInput: '',
        commandHistory: newHistory,
        historyIndex: -1,
      };
    });
  }, []);

  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    setState((prev) => {
      const { commandHistory, historyIndex } = prev;
      if (commandHistory.length === 0) return prev;

      let newIndex: number;
      if (direction === 'up') {
        newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      } else {
        newIndex = Math.max(historyIndex - 1, -1);
      }

      const newInput = newIndex >= 0 ? commandHistory[newIndex] : '';

      return {
        ...prev,
        currentInput: newInput,
        historyIndex: newIndex,
      };
    });
  }, []);

  return { state, handleInput, setInput, navigateHistory };
}
