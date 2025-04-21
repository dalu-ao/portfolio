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
    startDate: "June 2024",
    endDate: "October 2024",
    company: "Amazon Web Services",
    title: "Software Developer Engineer Intern",
    description:
      "Developed a natural language interface for financial data analysis, incorporating AI research to improve how users interact with and visualize complex data.",
  },
  {
    startDate: "April 2024",
    endDate: "June 2024",
    company: "PowerPay",
    title: "Full-Stack Developer Intern",
    description:
      "Built and maintained features for a financial web application using Next.js and Node.js. Integrated various AWS services and financial APIs for secure data processing.",
  },
  {
    startDate: "May 2023",
    endDate: "September 2023",
    company: "Amazon Web Services",
    title: "Software Developer Engineer Intern",
    description:
      "Created an internal tool to track and analyze user interactions with team's product. Built APIs and dashboards to display key usage metrics and improve user experience analysis.",
  },
] as const;

export const projectsData = [
  {
    subtitle: "ML • Python • Flutter",
    title: "Meddibia",
    description: "AI meddical companion.",
    gradient: "from-red-400 via-purple-400 to-blue-400",
    link: "https://devpost.com/software/meddibia",
  },
  {
    subtitle: "AI • Supabase • Flutter",
    title: "Reech",
    description: "Smart tracking. Smart progress.",
    gradient: "from-green-400 via-emerald-400 to-cyan-400",
    link: "https://tryreech.com",
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
    icon: "</>",
    title: "Programming Languages ",
    description:
      "including Java, JavaScript, TypeScript, Python, Dart, SQL, and C for versatile development needs.",
  },
  {
    icon: "💻",
    title: "Web & Mobile Development ",
    description:
      "with React.js, Next.js, Flutter, Node.js, and APIs (REST & GraphQL)",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure ",
    description:
      "using Docker, AWS, Supabase, and Firebase for scalable cloud solutions.",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning ",
    description:
      "with LLMs, OpenCV, MediaPipe, and Hugging Face for intelligent solutions.",
  },
  {
    icon: "🧪",
    title: "Testing & Version Control ",
    description:
      "using Jest, Cypress, JUnit, Postman, and Git/GitHub for quality assurance.",
  },
  {
    icon: "⚽️",
    title: "Interests & Activities ",
    description:
      "focused on Indie hacking, ML Research, Music Production, and Football.",
  },
] as const;
