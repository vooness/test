"use client";

import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from "react";

const services = [
  {
    title: "Graphic Design",
    description: "Stunning branding, logo creation, and captivating visual assets for your business.",
    checkmarks: ["Custom Logos", "Brand Guidelines", "Social Media Assets"],
  },
  {
    title: "Video Editing",
    description: "Engaging video content with professional effects, transitions, and storytelling.",
    checkmarks: ["Cinematic Effects", "Smooth Transitions", "Professional Audio"],
  },
  {
    title: "Web Development",
    description: "Responsive, functional websites and e-shops tailored to your needs.",
    checkmarks: ["Custom Design", "E-Commerce Solutions", "SEO Optimization"],
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="services" // Added this line
      className="relative py-24 px-6 sm:px-12 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0f172a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight relative inline-block">
            What I Do
            {/* Brush Underline Animation */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
            ></motion.div>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering creative solutions with precision, passion, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardAnimation}
              className={`relative group p-8 bg-[#161b22] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                activeCard === i ? "scale-105 border border-orange-500" : "border border-transparent"
              }`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500"></div>
              <div className="relative z-10">
                {/* Service Name */}
                <div className="flex justify-center items-center mb-6">
                  <h3 className="text-3xl font-bold text-orange-500">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                {/* Checkmarks */}
                <ul className="mt-4 space-y-2">
                  {service.checkmarks.map((check, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <BsCheck2Circle className="text-green-500 mr-2" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Glow Effects */}
        <motion.div
          className="absolute -top-24 -left-16 w-96 h-96 bg-orange-500 rounded-full blur-[200px] opacity-30 z-0"
          animate={{ x: [0, 20, -20], y: [0, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-48 right-0 w-72 h-72 bg-yellow-500 rounded-full blur-[150px] opacity-20 z-0"
          animate={{ x: [0, -15, 15], y: [0, -15, 15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all"
          >
            Let’s Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
