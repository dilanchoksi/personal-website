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
      className={`flex items-center justify-between fixed w-full top-0 left-0 md:px-6 lg:px-16 px-24 z-40 __cust_trans duration-1000 ${
        scrolled ? "bg-zinc-300 opacity-95 py-2" : "bg-transparent py-10"
      }`}
    >
      <div className="flex flex-shrink-0 items-center z-50">
        <img
          className={`mx-2 w-28 duration-700 ${scrolled ? "invert" : ""}`}
          src={logo}
          alt=""
        />
      </div>
      <div className="flex gap-4 z-50">
        <ul
          className={`flex items-center justify-center gap-4 font-sans font-bold duration-1000 ${
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
          className={`flex items-center justify-center gap-4 text-lg rounded-full p-1.5 z-50 duration-1000 ${
            scrolled ? "bg-black text-white" : "bg-white text-black"
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
