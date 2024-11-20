import project1 from "../assets/i-cap.png";
import project2 from "../assets/m-cap.png";
import project3 from "../assets/d-cap.jpg";
import project4 from "../assets/p-cap.png";

export const NAVBAR_TABS = [
  { tabName: "About", href: "#about" },
  { tabName: "Skills", href: "#skills" },
  { tabName: "Experience", href: "#experience" },
  { tabName: "Projects", href: "#projects" },
  { tabName: "Contact", href: "#contact" },
];

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT =
  "Hi! I'm an undergraduate student studying Computer Science, Statistics, and Data Science at the University of Illinois Urbana-Champaign. As a versatile full-stack-developer, I have a passion for creating socially impactful and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I've worked with a variety of languages and technologies including Java (Spring Boot), Python (Django, Flask), JavaScript (React, Node.js, Next.js), and more. Outside of coding, I enjoy staying active with sports, playing poker, and exploring new technologies.";

export const SKILLS = [
  { language: "Java", frameworks: ["Spring Boot", "Java EE"] },
  {
    language: "Python",
    frameworks: ["Django", "Flask", "Pandas", "Scikit-learn"],
  },
  {
    language: "JavaScript",
    frameworks: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    language: "C++",
    frameworks: [],
  },
  {
    language: "HTML/CSS",
    frameworks: ["Tailwind", "Bootstrap"],
  },
  {
    language: "SQL/MQL",
    frameworks: ["PostgreSQL", "MongoDB"],
  },
];

export const EXPERIENCES = [
  {
    year: "August 2024 \u2192 Present",
    role: "Software Engineer",
    company: "SeriesFarm",
    description: `Developing a full-stack fintech platform to expedite the agricultural grant process`,
    technologies: [
      "React",
      "Django",
      "MongoDB",
      "OAuth 2.0",
      "Open AI API",
      "Tailwind",
    ],
  },
  {
    year: "May 2024 \u2192 August 2024",
    role: "Software Engineer Intern",
    company: "Wakefern Food Corporation (ShopRite)",
    description: `Interned in the Tech division's Supply Chain Innovation dept.`,
    technologies: [
      "Java",
      "JavaScript",
      "SQL",
      "Spring Boot (Java EE)",
      "Jackson",
      "Node.js",
      "Express.js",
      "Axios",
      "Prometheus",
      "Apache HTTP",
      "Docker",
      "HTML/CSS",
    ],
  },
  {
    year: "August 2023 \u2192 December 2023",
    role: "Software Developer",
    company: "Project Code",
    description: `Contributed to the development an apartment finder application for students.`,
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
  },
  {
    year: "February 2022 \u2192 November 2022",
    role: "Code Instructor",
    company: "Code Ninjas",
    description: `Taught various applications of JavaScript, Java, and Python to students, maintaining a project-based learning environment.`,
    technologies: ["Python", "Java", "JavaScript"],
  },
  {
    year: "September 2021 \u2192 June 2022",
    role: "Software Engineer",
    company: "First Robotics Competition Team 75",
    description: `Utilized the ROSJava framework to implement service calls and node management between robot modules. Also leveraged Java’s Apache Commons Math library for path planning, trajectory generation, and obstacle avoidance.`,
    technologies: ["Java", "ROSJava", "Apache Commons Math"],
  },
];

export const PROJECTS = [
  {
    title: "InterView",
    image: project1,
    description: "An AI-powered mock interview simulator.",
    technologies: [
      "Next.js",
      "React.js",
      "Google Gemini API",
      "Neon Serverless Postgres",
      "Drizzle ORM",
      "Tailwind",
      "Clerk Authentication",
    ],
    web: "https://interview-ai-red.vercel.app/dashboard",
    gh: "https://github.com/dilanchoksi/interview-ai.git",
  },
  {
    title: "MoneyMap",
    image: project2,
    description: "A full-stack expense tracker built with MERN.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk"],
    web: "https://money-map-red.onrender.com",
    gh: "https://github.com/dilanchoksi/money-map",
  },
  {
    title: "DiamondAlysis",
    image: project3,
    description:
      "A research project using EDA and machine learning to explore the valuation metrics of diamonds.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    gh: "https://github.com/dilanchoksi/diamondalysis",
  },
  {
    title: "Personal Website",
    image: project4,
    description: "Built to showcase my professional life (this website).",
    technologies: ["React.js", "Tailwind", "Framer Motion"],
    gh: "https://github.com/dilanchoksi/personal-website",
  },
];

export const CONTACT = {
  address: "New York City Metropolitan Area",
  phoneNo: "908-635-0916",
  email: "dilanchoksi@gmail.com",
};
