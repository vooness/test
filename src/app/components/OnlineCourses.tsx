"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsCheckCircle } from "react-icons/bs";

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description:
      "Master AI fundamentals and advanced techniques with real-world projects.",
    highlights: ["Neural Networks", "Machine Learning Basics", "Real-World Projects"],
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Learn to create professional designs with tools like Photoshop and Figma.",
    highlights: ["Adobe Photoshop", "Figma Prototyping", "Brand Guidelines"],
  },
  {
    id: 3,
    title: "Video Editing",
    description: "Edit stunning videos using Premiere Pro and DaVinci Resolve.",
    highlights: ["Cinematic Effects", "Color Grading", "Professional Audio"],
  },
  {
    id: 4,
    title: "Front-End Development",
    description:
      "Build modern, responsive websites using React, Next.js, and modern CSS.",
    highlights: ["React.js Basics", "CSS Animations", "Responsive Design"],
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const OnlineCourses = () => {
  const handleBookCourse = (courseTitle: string) => {
    alert(`Booking course: ${courseTitle}`);
  };

  return (
    <section
      id="courses"
      className="relative py-24 px-6 sm:px-12 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Pixelated Borders */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {/* Top Pixelated Border */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[10px] bg-[url('/imgs/pixel-border-horizontal.png')] bg-repeat-x"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Right Pixelated Border */}
        <motion.div
          className="absolute top-0 right-0 h-full w-[10px] bg-[url('/imgs/pixel-border-vertical.png')] bg-repeat-y"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold relative inline-block">
            Explore My Courses
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
            ></motion.div>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            These courses are funded by the European Social Fund for Education and are
            free for participants, whether employed, self-employed, or unemployed.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              custom={i}
              variants={cardAnimation}
              className="relative group bg-[#20262f] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.7)] transition-all duration-500 h-full flex flex-col justify-between"
            >
              {/* Neon Border */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500"></div>
              <div className="relative z-10 p-6 flex flex-col flex-grow">
                {/* Course Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {course.title}
                </h3>
                {/* Course Description */}
                <p className="text-gray-400 mb-4 flex-grow">{course.description}</p>
                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <BsCheckCircle className="text-orange-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Action */}
                <div className="mt-auto flex justify-end items-center">
                  <button
                    onClick={() => handleBookCourse(course.title)}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineCourses;
