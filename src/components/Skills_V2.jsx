import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const Skills_V2 = () => {
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
        <div className="text-center tracking-wide font-extralight">
          <div className="bg-zinc-800 border-white border-2 rounded-xl mb-2">
            <div class="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-4 text-5xl tracking-wide font-bold">
              Java
            </div>
          </div>
          Spring Boot
          <br />
          Java EE
        </div>
        <div className="bg-zinc-800 border-white border-2 rounded-xl ">
          <div class="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-4 text-5xl tracking-wide font-bold">
            Python
          </div>
        </div>{" "}
        <div className="bg-zinc-800 border-white border-2 rounded-xl ">
          <div class="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-4 text-5xl tracking-wide font-bold">
            JavaScript
          </div>
        </div>{" "}
        <div className="bg-zinc-800 border-white border-2 rounded-xl ">
          <div class="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-4 text-5xl tracking-wide font-bold">
            C++
          </div>
        </div>{" "}
        <div className="bg-zinc-800 border-white border-2 rounded-xl ">
          <div class="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-4 text-5xl tracking-wide font-bold">
            HTML
          </div>
        </div>{" "}
        <div className="bg-zinc-800 border-white border-2 rounded-xl ">
          <div class="bg-gradient-to-r from-orange-600 via-pink-400 to-blue-600 text-transparent bg-clip-text p-4 text-5xl tracking-wide font-bold">
            CSS
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills_V2;
