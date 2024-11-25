"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a team of passionate designers and developers committed to creating exceptional digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#web-design" className="hover:text-white transition-colors duration-300">
                Web Design
              </a>
            </li>
            <li>
              <a href="#graphic-design" className="hover:text-white transition-colors duration-300">
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#video-editing" className="hover:text-white transition-colors duration-300">
                Video Editing
              </a>
            </li>
            <li>
              <a href="#seo" className="hover:text-white transition-colors duration-300">
                SEO Optimization
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
