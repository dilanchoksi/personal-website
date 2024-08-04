import { useState } from "react";
import { SKILLS } from "../constants/constants";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -3.5 },
  animate: {
    y: [3.5, -3.5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  const [currSkill, setCurrSkill] = useState(null);
  const [locked, setLocked] = useState(false);
  const [lockedIdx, setLockedIdx] = useState(null);
  const [display, setDisplay] = useState(false);

  return (
    <div id="skills" className="border-b border-slate-800 pt-1 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 mb-10 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-1"
      >
        Skills
      </motion.h2>
      <h6 className="text-center mb-14 text-neutral-600">
        Hover/Click on skills to interact
      </h6>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-start justify-center gap-4"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={iconVariants(Math.floor(Math.random() * 4) + 3)}
            initial="initial"
            animate="animate"
            key={index}
            className="text-center"
          >
            <h1
              data-key={index}
              className={`cursor-pointer border-2 rounded-lg  p-3 text-3xl tracking-wide font-bold duration-100 hover:border-white hover:scale-105
              ${
                lockedIdx == index
                  ? "border-yellow-600 scale-105"
                  : "border-zinc-700"
              }
                `}
              onMouseOver={() => {
                if (locked) {
                } else {
                  setCurrSkill(skill);
                  setDisplay(true);
                }
              }}
              onMouseOut={() => {
                locked ? {} : setDisplay(false);
              }}
              onClick={() => {
                if (index == lockedIdx) {
                  setLocked(false);
                  setLockedIdx(null);
                } else {
                  setLocked(true);
                  setCurrSkill(skill);
                  setLockedIdx(index);
                }
              }}
            >
              {skill.language}
            </h1>
          </motion.div>
        ))}
      </motion.div>
      <div className="h-12">
        <div
          className={`flex gap-2 justify-center mt-8 duration-500 flex-wrap ${
            display ? "opacity-100" : "opacity-0"
          }`}
        >
          {currSkill?.frameworks.map((framework, index) => (
            <p
              className="text-md md:text-xl h-auto rounded px-2 py-1 bg-neutral-900 font-medium text-yellow-600"
              key={index}
            >
              {framework}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
