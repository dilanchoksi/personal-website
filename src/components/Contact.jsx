import { CONTACT } from "../constants/constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-slate-800 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-400 to-orange-600 text-transparent bg-clip-text"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="#"
          className="my-4 text-2xl"
        >
          {CONTACT.email}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-xl"
        >
          {CONTACT.phoneNo}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
