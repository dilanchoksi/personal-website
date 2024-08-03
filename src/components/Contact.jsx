import { CONTACT } from "../constants/constants";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-slate-800 pb-20 text-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 mb-10 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-400 to-orange-600 text-transparent bg-clip-text p-1"
      >
        Get in Touch
      </motion.h1>
      <div className="hover:scale-105 duration-100 inline-block mb-6">
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -15 }}
          transition={{ duration: 1 }}
          href="https://www.linkedin.com/in/dilanchoksi/"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-lg rounded-full p-1.5 bg-[#004182] w-32 mx-auto border-2 border-white"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
          <p className="font-medium">LinkedIn</p>
        </motion.a>
      </div>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="my-2 text-xl text-center"
      >
        {CONTACT.email} • {CONTACT.phoneNo}
      </motion.p>
    </div>
  );
};

export default Contact;
