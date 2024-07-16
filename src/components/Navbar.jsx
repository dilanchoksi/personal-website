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
      className={`bg-yellow-500 md:flex md:items-center md:justify-between md:fixed md:w-full md:top-0 md:left-0 md:px-6 md:z-40 md:duration-1000 md:bg-transparent md:py-10 ${
        scrolled ? "md:bg-zinc-300 md:opacity-95 md:py-2" : ""
      }`}
    >
      <div className="md:flex md:flex-shrink-0 md:items-center md:z-50">
        <img
          className={`md:mx-2 md:w-28 md:duration-700 ${
            scrolled ? "md:invert" : ""
          }`}
          src={logo}
          alt=""
        />
      </div>
      <div className="md:flex md:gap-4 md:z-50">
        <ul
          className={`md:flex md:items-center md:justify-center md:gap-4 md:font-sans md:font-bold md:duration-1000 ${
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
          className={`flex items-center justify-center gap-4 text-lg rounded-full p-1.5 z-50 duration-1000 bg-white text-black ${
            scrolled ? "invert" : ""
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
