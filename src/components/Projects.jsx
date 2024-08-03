import { PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";

//DEMO button OnHover: "Coming soon... Production deployment in progress. For now, check out the GitHub repository for the source code! :)"
//Insert video preview??

const Projects = () => {
  return (
    <div id="projects" className="border-b border-slate-800 pt-1 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-1"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 lg:flex lg:justify-end mr-20"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded-2xl border-[1px] border-white h-36"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex gap-4 mb-4">
                <h6 className="font-bold text-xl">{project.title}</h6>
                <div className="flex gap-2">
                  {project.web && (
                    <a
                      href={project.web}
                      target="_blank"
                      className="bg-blue-800 rounded-xl text-xs p-1 font-black border-white border-2 hover:scale-105 inline-block duration-100"
                    >
                      Website
                    </a>
                  )}
                  <a
                    href={project.gh}
                    target="_blank"
                    className="bg-[#7C007C] rounded-xl text-xs p-1 font-black border-white border-2 hover:scale-105 inline-block duration-100"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <p className="mb-4 text-neutral-300">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="cursor-default mr-2 rounded inline-block bg-neutral-900 mb-2 px-2 py-1 text-sm font-medium text-yellow-600"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
