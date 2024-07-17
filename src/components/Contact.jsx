import { CONTACT } from "../constants/constants";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-slate-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-400 to-orange-600 text-transparent bg-clip-text"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center">
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -15 }}
          transition={{ duration: 1 }}
          href="https://www.linkedin.com/in/dilanchoksi/"
          className="flex items-center justify-center gap-4 text-lg rounded-full p-1.5 bg-[#004182] w-32 mb-6 mx-auto border-2 border-white"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
          <p>LinkedIn</p>
        </motion.a>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -15 }}
          transition={{ duration: 1 }}
          className="my-2 text-xl"
        >
          {CONTACT.email} • {CONTACT.phoneNo}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
