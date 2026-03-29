import type { CVData } from "../types";

export const cv: CVData = {
  name: "Michał Sacharczuk",
  title: "Software Engineer",
  asciiArt: `
███╗   ███╗██╗ ██████╗██╗  ██╗ █████╗ ██╗
████╗ ████║██║██╔════╝██║  ██║██╔══██╗██║
██╔████╔██║██║██║     ███████║███████║██║
██║╚██╔╝██║██║██║     ██╔══██║██╔══██║██║
██║ ╚═╝ ██║██║╚██████╗██║  ██║██║  ██║███████╗
╚═╝     ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

███████╗ █████╗  ██████╗██╗  ██╗ █████╗ ██████╗  ██████╗███████╗██╗   ██╗██╗  ██╗
██╔════╝██╔══██╗██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝╚══███╔╝██║   ██║██║ ██╔╝
███████╗███████║██║     ███████║███████║██████╔╝██║       ███╔╝ ██║   ██║█████╔╝
╚════██║██╔══██║██║     ██╔══██║██╔══██║██╔══██╗██║      ███╔╝  ██║   ██║██╔═██╗
███████║██║  ██║╚██████╗██║  ██║██║  ██║██║  ██║╚██████╗███████╗╚██████╔╝██║  ██╗
╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝`,

  about: {
    summary:
      "Passionate software engineer with 2+ years of experience. I enjoy building reliable services, integrations and background jobs that process large datasets, and occasionally building frontend tools.",
    location: "Poland",
    highlights: [
      "Built and maintained internal company services used by 100+ employees",
      "Football fan and amateur cook",
      "Technology and gaming enthusiast",
    ],
  },

  experience: [
    {
      role: "Software Engineer",
      company: "RTB House",
      location: "Warsaw, Poland (Remote)",
      period: "November 2023 – Present",
      points: [
        "Developed automation tools and scripts using TypeScript and Node.js to streamline internal processes.",
        "Built an internal AI assistant using Google LLMs with Retrieval-Augmented Generation (RAG), leveraging Python and Google Cloud SDKs to handle document ingestion, vector search and user-facing interaction.",
        "Managed and processed real-time data streams, ensuring efficient data handling and integrity.",
        "Utilized BigQuery and GraphQL for complex data retrieval and manipulation, optimizing database interactions.",
        "Processed large-scale files, including XML, to support various business needs and data transformations.",
        "Created and maintained multithreaded applications to improve performance and scalability of critical tasks.",
        "Integrated external APIs to communicate with third-party servers, enhancing system capabilities and data exchange.",
        "Designed and implemented complex solutions used by major global e-commerce platforms, while adhering to tight deadlines and maintaining high-quality standards.",
        "Handled and processed large-scale datasets, leveraging scalable technologies and optimizing performance for data-intensive operations.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "University of Bialystok",
      period: "Nov. 2020 – July 2023",
      details: "Bialystok, Poland",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "SQL", level: 4 },
        { name: "HTML/CSS", level: 3 },
      ],
    },
    {
      category: "Frameworks & Runtime",
      items: [
        { name: "Node.js", level: 5 },
        { name: "NestJS", level: 4 },
        { name: "Multithreading", level: 4 },
        { name: "Docker", level: 3 },
      ],
    },
    {
      category: "Cloud & Data",
      items: [
        { name: "GCP", level: 4 },
        { name: "BigQuery", level: 4 },
        { name: "GraphQL", level: 4 },
        { name: "Cloud Storage", level: 4 },
        { name: "Vertex AI", level: 3 },
      ],
    },
    {
      category: "AI & LLM Tooling",
      items: [
        { name: "RAG", level: 4 },
        { name: "Vector Search", level: 4 },
        { name: "Google Cloud SDKs", level: 4 },
        { name: "Chainlit", level: 3 },
      ],
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", level: 5 },
        { name: "VS Code", level: 5 },
        { name: "PostgreSQL", level: 4 },
        { name: "Firebase", level: 3 },
        { name: "Postman", level: 4 },
        { name: "Jenkins", level: 3 },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "System Design", level: 4 },
        { name: "Data Pipelines", level: 4 },
        { name: "Optimization", level: 4 },
        { name: "Automation", level: 5 },
      ],
    },
    {
      category: "AI Usage",
      items: [
        { name: "AI-assisted Dev", level: 4 },
        { name: "Prompt Engineering", level: 4 },
        { name: "Code Generation", level: 4 },
        { name: "AI Pair Programming", level: 3 },
      ],
    },
  ],

  contact: [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/michal",
      url: "https://linkedin.com/in/michal",
    },
    {
      label: "GitHub",
      value: "github.com/xMichsen",
      url: "https://github.com/xMichsen",
    },
    {
      label: "Email",
      value: "michalsacharczuk99@gmail.com",
      url: "mailto:michalsacharczuk99@gmail.com",
    },
  ],

  projects: [
    {
      name: "Case opening",
      description:
        "A web-based CS2 case opening simulator with a zero-to-hero progression system. Start with nothing, open cases, build your inventory, and try to profit (spoiler: the house always wins).",
      tech: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
      url: "https://xmichsenx.github.io/caseopening/",
    },
  ],
};
