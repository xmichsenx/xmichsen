# Terminal CV

An interactive terminal-style CV/resume website. Visitors type commands to explore sections like experience, skills, and projects.

## Tech Stack

React · TypeScript · Vite · CSS Modules

## Getting Started

```
npm install
npm run dev
```

## Commands

| Command      | Description                       |
| ------------ | --------------------------------- |
| `help`       | List all available commands       |
| `about`      | About me                          |
| `experience` | Work experience timeline          |
| `education`  | Education history                 |
| `skills`     | Skills and technologies           |
| `projects`   | Personal and open-source projects |
| `contact`    | Contact info and social links     |
| `clear`      | Clear the terminal                |

## Customize

Edit `src/data/cv.ts` with your own information — it's the single source of truth for all CV content.

## Testing

```
npm test
```

## Deployment

Pushes to `main` auto-deploy to GitHub Pages via the included GitHub Actions workflow.
