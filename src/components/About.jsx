import aboutImg from "../assets/me.png";
import { ABOUT_TEXT } from "../constants/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-slate-800 pt-1 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-400 to-orange-600 text-transparent bg-clip-text p-1"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap xl:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:pl-8 xl:pl-28"
        >
          <div className="flex items-center justify-center xl:w-96 2xl:w-auto">
            <img
              src={aboutImg}
              alt=""
              className="rounded-full border-8 w-72 md:w-96 md:mb-10 lg:w-96"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl sm:text-lg leading-[19px] md:text-xl pt-10 text-center 2xl:py-8">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
