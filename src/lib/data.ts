export const gradients = {
  green: "bg-gradient-to-r from-emerald-400 via-emerald-400 to-green-400",
  blue: "bg-gradient-to-r from-blue-400 via-blue-400 to-cyan-400",
  purple: "bg-gradient-to-r from-purple-400 via-purple-400 to-violet-400",
  red: "bg-gradient-to-r from-orange-600 via-red-500 to-red-500",
  default: "bg-white/90",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    startDate: "June 2025",
    endDate: "September 2025",
    company: "Amazon Web Services",
    title: "AI Engineer",
    description:
      "Built an internal MCP tool that helped capacity engineers access critical operational information through natural language queries. Integrated agentic workflows to retrieve, analyze, and summarize data across multiple sources for faster decision-making.",
  },
  {
    startDate: "June 2024",
    endDate: "October 2024",
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    description:
      "Developed a natural language interface for financial data analysis, using LLM research and structured prompting to help users query, interpret, and visualize complex data.",
  },
  {
    startDate: "March 2024",
    endDate: "June 2024",
    company: "PowerPay",
    title: "Full-Stack Developer Intern",
    description:
      "Built secure fintech features across Next.js, Node.js, Plaid, and AWS Lambda. Worked across frontend flows, API routes, validation, error handling, and backend data processing for sensitive financial workflows.",
  },
  {
    startDate: "May 2023",
    endDate: "September 2023",
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    description:
      "Created an internal analytics tool to track customer journey data, expose workflow insights, and help teams understand product usage through APIs and dashboards.",
  },
] as const;

export const projectsData = [
  {
    subtitle: "ML • Python • Flutter",
    title: "Meddibia",
    description: "AI medical companion.",
    gradient: "from-red-400 via-purple-400 to-blue-400",
    link: "https://devpost.com/software/meddibia",
  },
  {
    subtitle: "AI • Supabase • Flutter",
    title: "Reech",
    description: "Smart tracking. Smart progress.",
    gradient: "from-green-400 via-emerald-400 to-cyan-400",
    link: "https://apps.apple.com/us/app/reech-workout-tracker/id6744148500",
  },
  {
    subtitle: "Python • OpenCV • MediaPipe",
    title: "Gesture Control",
    description: "Your hands. Your commands.",
    gradient: "from-purple-400 via-pink-400 to-red-400",
    link: "https://devpost.com/software/gesture-ai",
  },
  {
    subtitle: "AI Security • FastAPI • React • WebSockets",
    title: "Xploit",
    description: "Attack agents. Safer systems.",
    gradient: "from-slate-700 via-blue-500 to-cyan-400",
  },
] as const;

export const skillsData = [
  {
    icon: "</>",
    title: "Product Engineering ",
    description:
      "with full-stack development across React, Next.js, Flutter, Node.js, APIs, and production user workflows.",
  },
  {
    icon: "💻",
    title: "AI & Data Systems ",
    description:
      "with LLMs, agentic workflows, prompting, data querying, visualization, Pydantic-AI, OpenCV, MediaPipe, and Hugging Face.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure ",
    description:
      "with AWS, Supabase, Firebase, PostgreSQL, SQLite, Docker, REST APIs, GraphQL, and serverless infrastructure.",
  },
  {
    icon: "🤖",
    title: "Engineering Foundations ",
    description:
      "with TypeScript, JavaScript, Python, Java, Dart, SQL, C, testing, Git, and system design.",
  },
  {
    icon: "🧪",
    title: "Product Judgment ",
    description:
      "by turning ambiguous requirements into usable interfaces, reliable systems, and clear user outcomes.",
  },
  {
    icon: "⚽️",
    title: "Interests ",
    description:
      "including AI safety, local LLMs, indie hacking, music production, and soccer.",
  },
] as const;
