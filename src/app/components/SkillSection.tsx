"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPencilAlt,
  FaVideo,
  FaCameraRetro,
} from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML & CSS", value: 90, icon: <FaHtml5 /> },
  { name: "React.js", value: 85, icon: <FaReact /> },
  { name: "JavaScript", value: 80, icon: <FaJsSquare /> },
  { name: "Next.js", value: 75, icon: <SiNextdotjs /> },
  { name: "Graphic Design", value: 95, icon: <FaPencilAlt /> },
  { name: "Video Editing", value: 90, icon: <FaVideo /> },
  { name: ".NET Core", value: 80, icon: <SiDotnet /> },
  { name: "Tailwind CSS", value: 85, icon: <SiTailwindcss /> },
  { name: "Photography", value: 80, icon: <FaCameraRetro /> },
];

const AboutMeSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Red Glow - Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-red-500 rounded-full blur-[150px] opacity-30"
        animate={{
          x: [-10, 10, -10],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Blue Glow - Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[150px] opacity-30"
        animate={{
          x: [10, -10, 10],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl text-white text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-extrabold tracking-wide">
            About Me
            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-1 bg-blue-500 w-24 mx-auto mt-2 origin-left"
            ></motion.div>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          I’m a freelancer specializing in graphic design, video editing,
          photography, and front-end development. I create engaging visual
          content using Adobe tools, build websites with modern libraries like
          React, Next.js, and Tailwind CSS, and have experience with .NET Core.
          Remote-friendly and ready to collaborate!
        </motion.p>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  skill,
}: {
  skill: { name: string; value: number; icon: React.ReactNode };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center space-y-4"
    >
      {/* Icon */}
      <div className="text-4xl text-blue-500">{skill.icon}</div>
      {/* Skill Name */}
      <h4 className="text-lg font-medium">{skill.name}</h4>
      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default AboutMeSection;
