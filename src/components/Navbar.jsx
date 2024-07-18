import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center z-40 justify-between fixed w-full top-0 left-0 px-6 lg:px-16 xl:px-24 duration-500 ${
        scrolled ? "bg-zinc-300 py-2 md:py-0" : "bg-transparent py-6"
      }`}
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="#home">
          <img
            className={`mx-2 h-7 duration-700 ${scrolled ? "invert" : ""}`}
            src={logo}
            alt=""
          />
        </a>
      </div>
      <button>
        <FaBars
          onClick={toggleMenu}
          className={`md:hidden relative z-50 ${menuOpen ? "hidden" : ""} ${
            scrolled ? "text-black" : "text-white"
          }`}
        ></FaBars>
        <FaTimes
          onClick={toggleMenu}
          className={`md:hidden relative z-50 ${menuOpen ? "" : "hidden"} ${
            scrolled ? "text-black" : "text-white"
          }`}
        ></FaTimes>
      </button>

      <div
        className={`border-y-2 md:border-none border-white text-xl md:text-base flex gap-3 md:gap-4 fixed md:static flex-col md:flex-row flex-shrink-0 w-screen md:w-auto left-0 items-center py-4 md:py-auto duration-500 md:opacity-100 ${
          menuOpen ? "opacity-[.97]" : "opacity-0"
        } ${
          scrolled
            ? "top-11 bg-zinc-300 md:bg-transparent"
            : "top-[76px] text-white bg-black md:bg-transparent"
        } `}
      >
        <ul
          className={`flex items-center justify-center gap-2 font-sans font-bold duration-1000 flex-col md:flex-row md:gap-4 ${
            scrolled ? "text-black" : ""
          }`}
        >
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:font-black">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu} className="hover:font-black">
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={toggleMenu}
              className="hover:font-black"
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="hover:font-black"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:font-black"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <div
          className={`flex items-center justify-center gap-4 text-lg rounded-full p-1.5 duration-1000 sm:w-28 ${
            !scrolled
              ? "bg-white text-black border-black border-2"
              : "bg-black text-white border-white border-2"
          }`}
        >
          <a
            href="https://www.linkedin.com/in/dilanchoksi/"
            className="hover:text-[#0a66c2]"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dilanchoksi/"
            className="hover:text-[#7C007C]"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/dilanchoksi_/"
            className="hover:text-[#D62976]"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
