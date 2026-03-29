import { useEffect, useRef, type KeyboardEvent } from "react";
import { useTerminal } from "../../hooks/useTerminal";
import type { TerminalLine } from "../../types";
import styles from "./Terminal.module.css";

const PROMPT = "visitor@cv:~$ ";

function TerminalLineView({ line }: { line: TerminalLine }) {
  if (line.type === "input") {
    return (
      <div className={`${styles.line} ${styles.lineInput}`}>
        <span className={styles.prompt}>{PROMPT}</span>
        {line.content}
      </div>
    );
  }

  return (
    <div className={`${styles.line} ${styles.lineOutput}`}>{line.content}</div>
  );
}

export function Terminal() {
  const { state, handleInput, setInput, navigateHistory } = useTerminal();
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [state.lines]);

  // Keep input focused
  const focusInput = () => inputRef.current?.focus();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInput(state.currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down");
    }
  };

  return (
    <div className={styles.wrapper} onClick={focusInput}>
      <div className={styles.window}>
        {/* Title bar chrome */}
        <div className={styles.chrome}>
          <div className={styles.dots}>
            <div className={`${styles.dot} ${styles.dotClose}`} />
            <div className={`${styles.dot} ${styles.dotMinimize}`} />
            <div className={`${styles.dot} ${styles.dotMaximize}`} />
          </div>
          <div className={styles.title}>visitor@cv — bash</div>
          <div className={styles.dots} style={{ visibility: "hidden" }}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </div>

        {/* Output area */}
        <div ref={outputRef} className={`${styles.output} ${styles.scanlines}`}>
          {state.lines.map((line) => (
            <TerminalLineView key={line.id} line={line} />
          ))}
        </div>

        {/* Input line */}
        <div className={styles.inputLine}>
          <span className={styles.prompt}>{PROMPT}</span>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            value={state.currentInput}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
