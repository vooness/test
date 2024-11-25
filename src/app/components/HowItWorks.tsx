"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion"; // Import framer-motion
import { FaHandshake, FaBrain, FaCode, FaCheck } from "react-icons/fa";

const steps = [
  {
    title: "01. Consultation",
    description: [
      "Understand your goals and vision clearly.",
      "Discuss project requirements in detail.",
      "Identify challenges and outline opportunities.",
    ],
    icon: <FaHandshake />,
    date: "Step 1",
  },
  {
    title: "02. Strategize & Plan",
    description: [
      "Craft a personalized strategy for your needs.",
      "Develop a clear timeline and milestones.",
      "Ensure alignment with your objectives.",
    ],
    icon: <FaBrain />,
    date: "Step 2",
  },
  {
    title: "03. Design & Develop",
    description: [
      "Produce high-quality prototypes for feedback.",
      "Iterate designs based on your input.",
      "Build efficient, high-performance solutions.",
    ],
    icon: <FaCode />,
    date: "Step 3",
  },
  {
    title: "04. Review & Deliver",
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
    <section className="relative bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight relative inline-block">
            How We{" "}
            <span className="relative">
              Work Together
              {/* Underline Animation */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute left-0 bottom-[-10px] h-[5px] w-full bg-orange-500 rounded-full origin-left"
              ></motion.div>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            A seamless, step-by-step approach to ensure your success.
          </p>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline
          animate={true}
          className="z-10"
          lineColor="#ff7300" /* Changes the vertical line to orange */
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
                borderRadius: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(33, 33, 33, 0.95)" }}
            >
              {/* Step Title */}
              <h3 className="text-2xl font-bold text-orange-500">
                {step.title}
                {/* Orange underline */}
                <div className="w-16 h-1 bg-orange-500 rounded-full mt-2"></div>
              </h3>

              {/* Step Description with Perfectly Aligned Check Marks */}
              <ul className="mt-4 space-y-3">
                {step.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 leading-6"
                  >
                    <span className="text-orange-500 text-lg">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTimeline;
