import { HERO_CONTENT } from "../constants/constants";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 lg:mb-35 h-full">
      <div className="w-full">
        <div className="text-white flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pt-10 mb-10 text-6xl font-bold tracking-tight lg:text-8xl"
          >
            Hi, I'm Dilan Choksi.
          </motion.h1>
          <motion.h2
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-white to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Student at the University of Illinois
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
