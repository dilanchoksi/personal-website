import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="text-white flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="color: pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Dilan Choksi
            </motion.h1>
            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-white to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Student at the University of Illinois
            </motion.h2>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tigher"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Dilan Choksi"
              className="rounded-full gap-x-5 border-8 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
