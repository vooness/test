"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaUsers, FaHandshake } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Solutions",
    text: "Working with you was an absolute pleasure! Your attention to detail and ability to bring ideas to life exceeded all our expectations.",
    avatar: "/imgs/6.jpg", // Replace with real images
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director, Creative Agency",
    text: "Your creativity and technical expertise transformed our vision into a stunning reality. Highly recommend your services!",
    avatar: "/imgs/75.jpg", // Replace with real images
  },
  {
    name: "Michael Brown",
    role: "Founder, StartupHub",
    text: "Exceptional collaboration from start to finish. Your dedication and professionalism are unmatched.",
    avatar: "/imgs/82.jpg", // Replace with real images
  },
];

const stats = [
  { icon: <FaUsers />, value: "100+", label: "Satisfied Clients" },
  { icon: <FaHandshake />, value: "50+", label: "Successful Projects" },
  { icon: <FaStar />, value: "5.0", label: "Average Rating" },
];

const WhyTrustMe = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight relative inline-block">
            Why Trust Me?
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute left-0 bottom-[-10px] h-[5px] w-2/3 bg-orange-500 rounded-full origin-left"
            ></motion.div>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Discover why clients choose me for their projects.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-orange-500 text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-orange-500 mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                <FaQuoteLeft className="text-orange-500 mr-2 inline-block" />
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Let’s collaborate to bring your vision to life!
          </h3>
          <button className="px-8 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustMe;
