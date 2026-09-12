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
    title: "AI Engineer — Internal MCP Tooling",
    description:
      "Built an internal MCP tool that helped capacity engineers access operational information through natural-language queries. Integrated agentic workflows to retrieve, analyze, and summarize data across multiple sources for faster decision-making.",
  },
  {
    startDate: "June 2024",
    endDate: "October 2024",
    company: "Amazon Web Services",
    title: "SDE Intern — Financial Data AI Interface",
    description:
      "Built a natural-language interface for financial data analysis, using LLM research and structured prompting to help users query, interpret, and visualize complex data.",
  },
  {
    startDate: "March 2024",
    endDate: "June 2024",
    company: "PowerPay",
    title: "Full-Stack Developer Intern",
    description:
      "Built secure fintech features across Next.js, Node.js, Plaid, and AWS Lambda, working across frontend flows, API routes, validation, error handling, and backend data processing for sensitive financial workflows.",
  },
  {
    startDate: "May 2023",
    endDate: "September 2023",
    company: "Amazon Web Services",
    title: "SDE Intern — Customer Journey Analytics",
    description:
      "Built an internal analytics tool to track customer journey data, expose workflow insights, and help teams understand product usage through APIs and dashboards.",
  },
] as const;

export const projectsData = [
  {
    subtitle: "AI Security • Pydantic • WebSockets",
    title: "Xploit",
    description: "Attack agents. Safer systems.",
    gradient: "from-slate-700 via-blue-500 to-cyan-400",
  },
  {
    subtitle: "AI • Supabase • Flutter",
    title: "Reech",
    description: "Smart tracking. Smart progress.",
    gradient: "from-green-400 via-emerald-400 to-cyan-400",
    link: "https://apps.apple.com/us/app/reech-workout-tracker/id6744148500",
  },
  {
    subtitle: "ML • Python • Flutter",
    title: "Meddibia",
    description: "AI medical companion.",
    gradient: "from-red-400 via-purple-400 to-blue-400",
    link: "https://devpost.com/software/meddibia",
  },
  {
    subtitle: "Python • OpenCV • MediaPipe",
    title: "Gesture Control",
    description: "Your hands. Your commands.",
    gradient: "from-purple-400 via-pink-400 to-red-400",
    link: "https://devpost.com/software/gesture-ai",
  },
] as const;

export const skillsData = [
  {
    icon: "💻",
    title: "Product Interfaces ",
    description:
      "Web and mobile products built with React, Next.js, Flutter, and SwiftUI.",
  },
  {
    icon: "🤖",
    title: "AI & Data Systems ",
    description:
      "I build AI applications and agent workflows, from tool integration and prompting to evaluation and reliability.",
  },
  {
    icon: "☁️",
    title: "Backend & Cloud ",
    description:
      "APIs, data models, and cloud infrastructure built with AWS, Supabase, PostgreSQL, SQLite, and Docker.",
  },
  {
    icon: "</>",
    title: "Core Engineering ",
    description:
      "TypeScript, Python, Dart, JavaScript, Java, and C, supported by testing with Jest, Cypress, and JUnit.",
  },
  {
    icon: "🧪",
    title: "Product Execution ",
    description:
      "Turning user needs into scoped features, working software, and steady iteration.",
  },
  {
    icon: "⚽️",
    title: "Interests ",
    description:
      "AI safety, local models, indie products, music production, and soccer.",
  },
] as const;
