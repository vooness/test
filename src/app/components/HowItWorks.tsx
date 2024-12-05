"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion"; // Import framer-motion
import { FaHandshake, FaBrain, FaCode, FaCheck } from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    description: [
      "Understand your goals and vision clearly.",
      "Discuss project requirements in detail.",
      "Identify challenges and outline opportunities.",
    ],
    icon: <FaHandshake />,
    date: "Step 1",
  },
  {
    title: "Strategize & Plan",
    description: [
      "Craft a personalized strategy for your needs.",
      "Develop a clear timeline and milestones.",
      "Ensure alignment with your objectives.",
    ],
    icon: <FaBrain />,
    date: "Step 2",
  },
  {
    title: "Design & Develop",
    description: [
      "Produce high-quality prototypes for feedback.",
      "Iterate designs based on your input.",
      "Build efficient, high-performance solutions.",
    ],
    icon: <FaCode />,
    date: "Step 3",
  },
  {
    title: "Review & Deliver",
    description: [
      "Perform rigorous quality checks.",
      "Deliver the project on time and within budget.",
      "Provide support for post-launch improvements.",
    ],
    icon: <FaCheck />,
    date: "Step 4",
  },
];

const EnhancedTimeline = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6 overflow-hidden">
      {/* Glowing Background Accents */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-transparent opacity-30 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-red-500 to-transparent opacity-30 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-extrabold tracking-tight text-gray-100 relative inline-block">
            How We{" "}
            <span className="relative">
              Work Together
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute left-0 bottom-[-10px] h-[6px] w-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full origin-left"
              ></motion.div>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6">
            An elegant, step-by-step approach designed to ensure your success at every phase.
          </p>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline
          animate={true}
          className="z-10"
          lineColor="rgba(255, 115, 0, 0.5)" /* Orange Glow Line */
        >
          {steps.map((step, index) => (
            <VerticalTimelineElement
              key={index}
              date={step.date}
              icon={step.icon}
              iconStyle={{
                background: "linear-gradient(135deg, #ff7300, #f85032)",
                color: "#fff",
                boxShadow: "0px 4px 20px rgba(255, 115, 0, 0.7)",
              }}
              contentStyle={{
                background: "rgba(33, 33, 33, 0.95)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 115, 0, 0.5)",
              }}
              contentArrowStyle={{
                borderRight: "8px solid rgba(33, 33, 33, 0.95)",
              }}
            >
              {/* Step Title */}
              <h3 className="text-2xl font-bold text-orange-400 relative">
                {step.title}
                {/* Animated Underline */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="absolute left-0 bottom-[-6px] h-[4px] bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                ></motion.div>
              </h3>

              {/* Step Description */}
              <ul className="mt-4 space-y-3">
                {step.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 leading-6 group"
                  >
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.2,
                        ease: "easeOut",
                      }}
                      className="text-green-400 text-lg"
                    >
                      ✔
                    </motion.span>
                    <span className="group-hover:text-orange-400 transition duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Call-To-Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTimeline;
