import { useState } from "react";
import { SKILLS } from "../constants/constants";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -2 },
  animate: {
    y: [2, -2],
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
    <div id="skills" className="border-b border-slate-800 pt-1 pb-20">
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
            variants={iconVariants(Math.floor(Math.random() * 5) + 2)}
            initial="initial"
            animate="animate"
            key={index}
            className="text-center"
          >
            <h1
              data-key={index}
              className={`cursor-pointer border-2 mb-5 rounded-lg  p-3 text-3xl tracking-wide font-bold duration-100 hover:border-white hover:scale-110
              ${
                lockedIdx == index
                  ? "border-red-500 scale-110"
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

      <div
        className={`flex gap-10 justify-center mt-10 h-8 font-bold text-xl md:text-2xl text-red-500 duration-500 ${
          display ? "opacity-100" : "opacity-0"
        }`}
      >
        {currSkill?.frameworks.map((framework, index) => (
          <p key={index}>{framework}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
