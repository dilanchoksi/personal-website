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
    <>
      <div
        className={`inline-block fixed -ml-7 z-50 duration-1000 ${
          scrolled ? "md:pt-3 py-2.5" : "py-10"
        }`}
      >
        <img
          className={`w-28 md:mx-2 md:w-28 md:duration-700 ${
            scrolled ? "invert" : ""
          }`}
          src={logo}
          alt=""
        />
      </div>
      <div
        className={`inline-block py-auto text-4xl md:hidden fixed left-0 w-screen z-40 duration-1000 h-auto ${
          scrolled ? "bg-white py-2 text-black" : "py-10"
        } `}
      >
        <button onClick={toggleMenu} className="float-right mr-6">
          <FaBars className=""></FaBars>
        </button>
      </div>
      <nav
        className={`duration-500 bg-zinc-300 h-screen top-0 p-10 flex fixed flex-col gap-4 z-50 w-1/2 md:justify-end md:h-auto md:right-0 md:flex md:flex-row md:gap-4 md:items-center md:fixed md:w-full md:top-0 md:left-0 md:px-6 md:z-40 md:duration-1000 md:bg-transparent md:py-10 ${
          scrolled ? "md:bg-zinc-300 md:opacity-95 md:py-2" : ""
        } ${menuOpen ? "left-1/2" : "left-full"}`}
      >
        <button
          onClick={toggleMenu}
          className="absolute text-4xl right-4 top-4 md:hidden text-black"
        >
          <FaTimes></FaTimes>
        </button>
        <div className="flex flex-col gap-6 text-3xl md:flex-row md:gap-4 md:z-50">
          <ul
            className={`text-black gap-6 flex-col flex font-bold md:text-white md:flex-row md:items-center md:justify-center md:gap-4 md:font-normal md:font-sans md:duration-1000 ${
              scrolled ? "md:invert" : ""
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
            className={`text-white bg-black flex items-center justify-center gap-4 text-lg rounded-full w-24 p-1.5 z-50 duration-1000 md:bg-white md:text-black ${
              scrolled ? "md:bg-black md:text-white" : ""
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
    </>
  );
};

export default Navbar;
