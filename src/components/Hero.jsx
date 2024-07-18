import { HERO_CONTENT } from "../constants/constants";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Hero = () => {
  return (
    <div
      id="home"
      className="border-b border-slate-800 h-screen pt-40 md:pt-40 lg:pl-10 xl:pt-36 2xl:pt-72"
    >
      <div className="w-full">
        <div className="flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="md:pt-10 mb-2 text-6xl font-bold lg:text-8xl"
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
