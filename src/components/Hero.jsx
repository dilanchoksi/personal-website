import { HERO_CONTENT } from "../constants/constants";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-slate-800 lg:mb-35 h-screen mt-72">
      <div className="w-full">
        <div className="flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pt-10 mb-10 text-6xl font-bold lg:text-9xl"
          >
            Hi, I'm Dilan Choksi.
          </motion.h1>
          <motion.h2
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 inline-block text-5xl text-transparent bg-clip-text font-bold"
          >
            Student at the University of Illinois
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
