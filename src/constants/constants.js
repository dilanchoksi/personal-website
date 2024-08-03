import project1 from "../assets/projects/i-cap.png";
import project2 from "../assets/projects/m-cap.png";
import project3 from "../assets/projects/d-cap.jpg";
import project4 from "../assets/projects/p-cap.png";

export const NAVBAR_TABS = [
  { tabName: "About", href: "#about" },
  { tabName: "Skills", href: "#skills" },
  { tabName: "Experience", href: "#experience" },
  { tabName: "Projects", href: "#projects" },
  { tabName: "Contact", href: "#contact" },
];

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT =
  "I am an undergraduate student studying Computer Science and Statistics at the University of Illinois Urbana-Champaign. As a versatile full-stack-developer, I have a passion for creating efficient and user-friendly web applications. I have worked with a variety of languages and technologies including Java, Python, JavaScript, Node.js, React.js, MongoDB, and more.  My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active with sports, playing poker, and exploring new technologies.";

export const SKILLS = [
  { language: "Java", frameworks: ["Spring Boot", "Java EE", "Jackson"] },
  {
    language: "Python",
    frameworks: ["Pandas", "TensorFlow", "Scikit-learn", "NumPy"],
  },
  {
    language: "JavaScript",
    frameworks: ["Node.js", "Express.js", "React.js", "Next.js", "jQuery"],
  },
  {
    language: "C++",
    frameworks: [],
  },
  {
    language: "HTML/CSS",
    frameworks: ["Bootstrap", "Tailwind"],
  },
  {
    language: "SQL/MQL",
    frameworks: ["PostgreSQL", "MongoDB"],
  },
];

export const EXPERIENCES = [
  {
    year: "May 2024 - August 2024",
    role: "Software Engineer Intern",
    company: "Wakefern Food Corporation",
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
      "Podman",
      "HTML/CSS",
    ],
  },
  {
    year: "August 2023 - December 2023",
    role: "Software Engineer",
    company: "Project: Code",
    description: `Contributed to the development of temperature prediction AI.`,
    technologies: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    year: "Febraury 2022 - November 2022",
    role: "Code Instructor",
    company: "Code Ninjas",
    description: `Taught various applications of JavaScript, Java, and Python to students, maintaining a project-based learning environment.`,
    technologies: ["JavaScript", "Java", "Python"],
  },
  {
    year: "September 2021 - June 2022",
    role: "Software Engineer",
    company: "First Robotics Compeition Team 75",
    description: `Utilized the ROSJava framework to implement service calls and node management between robot modules. Also leveraged Java’s Apache Commons Math library for path planning, trajectory generation, and obstacle avoidance.`,
    technologies: ["Java", "ROSJava", "Apache Commons Math"],
  },
];

export const PROJECTS = [
  {
    title: "InterView AI",
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
  },
  {
    title: "MoneyMap",
    image: project2,
    description: "A full-stack expense tracker built with MERN.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk Authentication",
    ],
  },
  {
    title: "DiamondAlysis",
    image: project3,
    description:
      "A research project using exploratory data analysis and machine learning to explore the valuation metrics of diamonds.",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Personal Website",
    image: project4,
    description:
      "The website you're looking at! Built to showcase my professional life.",
    technologies: ["React.js", "Tailwind", "Framer Motion", "HTML/CSS"],
  },
];

export const CONTACT = {
  address: "New York City Metropolitan Area",
  phoneNo: "908.635.0916",
  email: "dilanchoksi@gmail.com",
};
