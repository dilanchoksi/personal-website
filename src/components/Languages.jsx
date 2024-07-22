import { SKILLS } from "../constants/constants";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Languages = () => {
  return (
    <div id="skills" className="border-b border-slate-800 pt-1 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-1"
      >
        Languages
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-start justify-center gap-16"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={iconVariants(Math.floor(Math.random() * 5) + 2)}
            initial="initial"
            animate="animate"
            key={index}
            className="text-center group"
          >
            <h1 className="cursor-default border-b-2 mb-5 rounded-lg border-zinc-700 p-3 text-3xl tracking-wide font-bold duration-100 group-hover:border-white group-hover:scale-110">
              {skill.language}
            </h1>
            {skill.frameworks.map((framework, index) => (
              <div key={index}>
                <p className="inline-block mb-2 cursor-default mr-2 rounded w-auto bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-600 group-hover:text-neutral-900 group-hover:bg-yellow-600 duration-100 group-hover:scale-110">
                  {framework}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Languages;
