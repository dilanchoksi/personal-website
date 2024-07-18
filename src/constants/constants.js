import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT =
  "I am an undergraduate student studying Computer Science and Statistics at the University of Illinois Urbana-Champaign. As a versatile full-stack-developer, I have a passion for creating efficient and user-friendly web applications. I have worked with a variety of languages and technologies including Java, Python, JavaScript, Node.js, React.js, MongoDB, and more.  My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active with sports, playing poker, and exploring new technologies.";

export const SKILLS = [
  { language: "Java", frameworks: ["Spring Boot", "Java EE"] },
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
    role: "Software Innovation Intern",
    company: "Wakefern Food Corporation",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "August 2023 - December 2023",
    role: "Software Engineer",
    company: "Project: Code",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
  {
    year: "Febraury 2022 - November 2022",
    role: "Code Instructor",
    company: "Code Ninjas",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "September 2019 - June 2022",
    role: "Software Engineer",
    company: "First Robotics Compeition Team 75",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "New York City Metropolitan Area",
  phoneNo: "908.635.0916",
  email: "dilanchoksi@gmail.com",
};
