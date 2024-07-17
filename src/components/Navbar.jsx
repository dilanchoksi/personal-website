import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

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
    <nav
      className={`flex items-center z-40 justify-between fixed w-full top-0 left-0 px-6 lg:px-16 xl:px-24 duration-1000 ${
        scrolled ? "bg-zinc-300 py-2" : "bg-transparent py-10"
      }`}
    >
      <div className="flex flex-shrink-0 items-center">
        <img
          className={`mx-2 h-7 duration-700 ${scrolled ? "invert" : ""}`}
          src={logo}
          alt=""
        />
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
        className={`border-y-2 md:border-none border-white flex gap-4 fixed md:static flex-col md:flex-row flex-shrink-0 w-screen md:w-auto left-0 items-center py-4 md:py-auto duration-1000 md:opacity-100 ${
          menuOpen ? "opacity-[.97]" : "opacity-0"
        } ${
          scrolled
            ? "top-11 bg-zinc-300 md:bg-transparent"
            : "top-[108px] text-white bg-black md:bg-transparent"
        } `}
      >
        <ul
          className={`flex items-center justify-center gap-0 font-sans font-bold duration-1000 flex-col md:flex-row md:gap-4 ${
            scrolled ? "text-black" : ""
          }`}
        >
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div
          className={`flex items-center justify-center gap-4 text-lg rounded-full p-1.5 duration-1000 sm:w-28 ${
            menuOpen || !scrolled
              ? "bg-white text-black border-black border-2"
              : "md:bg-black md:text-white md:border-white border-2"
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
    </nav>
  );
};

export default Navbar;
