"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("ENG"); // Default language
  const [status, setStatus] = useState(true); // Online status

  // Detect scroll to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/60 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text px-3 py-1"
        >
          Le Artist
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <a
              href="#services"
              className="relative group text-white transition duration-300"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="relative group text-white transition duration-300"
            >
              Work
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative group text-white transition duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="relative group text-white transition duration-300"
            >
              Online Courses
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Language Switch & Online Status */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className={`text-lg ${
              language === "CZ" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => setLanguage("CZ")}
          >
            CZ
          </button>
          <button
            className={`text-lg ${
              language === "ENG" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => setLanguage("ENG")}
          >
            ENG
          </button>

          {/* Online Status */}
          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                status ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span>{status ? "Online" : "Offline"}</span>
          </div>
        </div>

        {/* Contact Me Button */}
        <a
          href="#contact"
          className="hidden lg:block px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
        >
          Contact Me
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Full-screen Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center z-40"
        >
          <motion.ul
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-center space-y-6 text-xl"
          >
            <li>
              <a
                href="#services"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Online Courses
              </a>
            </li>
          </motion.ul>

          {/* Contact & Availability */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="mt-8 text-center text-lg"
          >
            <p>📞 +420 123 456 789</p>
            <p>✉️ email@example.com</p>
            <p className="mt-2">
              {status ? (
                <span className="text-green-500">🟢 Online</span>
              ) : (
                <span className="text-red-500">🔴 Offline</span>
              )}
            </p>
          </motion.div>

          {/* Close Menu Button */}
          <button
            className="mt-8 px-6 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600"
            onClick={() => setIsOpen(false)}
          >
            Close Menu
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
