"use client";

import React from "react";
import Slider from "react-slick";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Web Development", value: 95 },
  { name: "React.js", value: 90 },
  { name: "Next.js", value: 85 },
  { name: "Photoshop", value: 80 },
  { name: "After Effects", value: 75 },
  { name: "Tailwind CSS", value: 85 },
  { name: ".NET Core", value: 80 },
  { name: "Marketing & SEO", value: 70 },
];

const SkillSection = () => {
  // React Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    // Custom dots class with added margin
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          marginTop: "-50px",
          marginBottom: "20px", // Added margin bottom
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></div>
    ),
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Animated background using Framer Motion
  const [ref, inView] = useInView({ triggerOnce: true });
  const backgroundControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      backgroundControls.start("animate");
    }
  }, [inView, backgroundControls]);

  const backgroundVariants = {
    initial: { background: "linear-gradient(270deg, #333, #333)" },
    animate: {
      background: [
        "linear-gradient(270deg, #333, #333)",
        "linear-gradient(270deg, #ff7300, #ff7300)",
      ],
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative bg-gray-900 text-white py-20 px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        variants={backgroundVariants}
        initial="initial"
        animate={backgroundControls}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-6"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-lg text-center mb-12"
        >
          A showcase of my core competencies and expertise.
        </motion.p>

        {/* Slider Component */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Slider {...sliderSettings}>
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill }: { skill: { name: string; value: number } }) => {
  const controls = useAnimation();
  const [refItem, inViewItem] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
  });

  React.useEffect(() => {
    if (inViewItem) {
      controls.start("visible");
    }
  }, [inViewItem, controls]);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const progressVariants = {
    hidden: { value: 0 },
    visible: {
      value: skill.value,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      ref={refItem}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className="flex justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Circular Progressbar */}
        <motion.div variants={progressVariants} initial="hidden" animate="visible">
          <div className="w-40 h-40 mb-4">
            <CircularProgressbarWithChildren
              value={skill.value}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "rgba(255, 255, 255, 1)",
                trailColor: "#333",
                textSize: "16px",
              })}
            >
              {/* Animated Number */}
              <AnimatedNumber target={skill.value} />
            </CircularProgressbarWithChildren>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-center"
          style={{ fontSize: "1.5rem" }} // Set font size to 1.5rem
        >
          {skill.name}
        </motion.p>
      </div>
    </motion.div>
  );
};

const AnimatedNumber = ({ target }: { target: number }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1000; // Animation duration in milliseconds
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min((progress / duration) * target, target);
      setValue(Math.floor(percentage));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target]);

  return <div className="text-white font-bold text-lg">{value}%</div>;
};

export default SkillSection;
