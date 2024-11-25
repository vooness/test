"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export const HeroSection = () => {
  return (
    <section className="relative bg-[#0f172a] text-white py-12 sm:py-20 md:py-28 flex items-center justify-center overflow-hidden px-6 sm:px-8 md:px-20 min-h-screen">
      {/* Wrapper for Content */}
      <div className="flex flex-col items-center w-full max-w-7xl ">
        {/* Top Section: Text and Image */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full  flex-wrap">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-6 text-center md:text-left flex-1"
          >
            <p className="text-base sm:text-lg text-gray-300">
              Frontend & Graphic Designer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
              Hello, I&apos;m{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                  Le Artist
                </span>
                {/* Underline Animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  className="absolute left-0 right-0 bottom-[-5px] mx-auto h-1 w-[90%] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
                ></motion.div>
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto md:mx-0">
              I craft elegant and modern designs while developing functional,
              fast, and user-friendly web applications.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-5 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-5 py-2 sm:px-6 sm:py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Side: Animation/Icon */}
          <div className="relative flex justify-center items-center w-full md:w-[50%] lg:w-[45%]">
            {/* Glow Animation - Hidden on Mobile */}
            <motion.div
              className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-orange-500 rounded-full blur-3xl hidden sm:block"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Rotating Circle with Dashes - Hidden on Mobile */}
            <motion.div
              className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full hidden sm:block"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
            >
              <div className="absolute inset-0 border-[6px] border-transparent border-t-orange-500 border-dotted rounded-full"></div>
            </motion.div>

            {/* Image - Hidden on Mobile */}
            <motion.img
              src="/imgs/banner3.png"
              alt="Your Image"
              className="relative z-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-full hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-6 text-center mt-10 md:mt-12 lg:mt-16 lg:grid-cols-4 w-full max-w-5xl"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
              <CountUp start={0} end={5} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
              <CountUp start={0} end={50} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
              <CountUp start={0} end={10} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Technologies Used</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-500">
              <CountUp start={0} end={500} duration={2} />+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">Designs Delivered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
