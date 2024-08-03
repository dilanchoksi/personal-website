import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
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

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-slate-800 pt-1 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400  box-content border-4 border-neutral-800 p-4 rounded-2xl hover:bg-cyan-400 hover:text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <TbBrandNextjs className="text-7xl box-content border-4 border-neutral-800 p-4 rounded-2xl hover:bg-white hover:text-black" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-7xl text-green-500 box-content border-4 border-neutral-800 p-4 rounded-2xl hover:bg-green-500 hover:text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <DiRedis className="text-7xl text-red-700 box-content border-4 border-neutral-800 p-4 rounded-2xl hover:bg-red-700 hover:text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-7xl text-green-500 box-content border-4 border-neutral-800 p-4 rounded-2xl hover:bg-green-500 hover:text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700 box-content border-4 border-neutral-800 p-4 rounded-2xl hover:bg-sky-700 hover:text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
