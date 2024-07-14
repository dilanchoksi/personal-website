import aboutImg from "../assets/me.png";
import { ABOUT_TEXT } from "../constants/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-slate-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-400 to-orange-600 text-transparent bg-clip-text"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap xl:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="" className="rounded-full border-8" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl text-xl xl:text-2xl p-8">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
