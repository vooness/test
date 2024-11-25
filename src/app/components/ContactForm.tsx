"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-tr from-pink-500 to-orange-500 opacity-20 rounded-full filter blur-3xl"
        animate={{ x: [-100, 100], y: [0, 50] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-full filter blur-2xl"
        animate={{ x: [100, -100], y: [0, -50] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold tracking-tight">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Have a project in mind? Let&apos;s collaborate and make something amazing
            together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-900 rounded-lg p-8 shadow-lg space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          {/* Subject Field */}
          <div>
            <label className="block text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Subject"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Send Message <FaPaperPlane className="ml-2" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
