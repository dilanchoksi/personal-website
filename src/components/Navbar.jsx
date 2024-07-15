import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={`flex items-center justify-between fixed w-full top-0 left-0 px-24 z-40 __cust_trans duration-500 ${
        scrolled ? "bg-white opacity-95 py-2" : "bg-transparent py-10"
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
          className={`flex items-center justify-center gap-4 font-sans font-bold duration-500 ${
            scrolled ? "text-black" : ""
          }`}
        >
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">SKILLS</a>
          </li>
          <li>
            <a href="">EXPERIENCE</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <div
          className={`flex items-center justify-center gap-4 text-lg rounded-full p-1.5 z-50 duration-500 ${
            scrolled ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
