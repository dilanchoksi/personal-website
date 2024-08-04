import { EXPERIENCES } from "../constants/constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-slate-800 pt-1 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-400 to-orange-600 text-transparent bg-clip-text"
      >
        Experience
      </motion.h1>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/4 lg:mr-10"
          >
            <p className="mb-2 lg:text-center text-neutral-300 font-bold">
              {experience.year}
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="font-bold text-xl text-red-500">
              {experience.company}
            </h6>
            <h6 className="mb-2 text-lg">{experience.role}</h6>
            <p className="mb-4 text-neutral-300">{experience.description}</p>
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="cursor-default mr-2 rounded inline-block bg-neutral-900 px-2 py-1 mb-2 text-sm font-medium text-yellow-600"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
