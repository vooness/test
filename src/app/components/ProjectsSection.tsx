"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importujte Image z next/image

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"WebDesign" | "GraphicDesign" | "VideoEditing">("WebDesign");

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sekce záhlaví */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight relative inline-block">
            Projects I{" "}
            <span className="relative">
              Worked On
              {/* Animace podtržení */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute left-0 bottom-[-10px] h-[5px] w-full bg-orange-500 rounded-full origin-left"
              ></motion.div>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover a curated selection of my work across Web Design, Graphic Design,
            and Video Editing. Each project is thoughtfully crafted to deliver impactful
            results for clients.
          </p>
        </motion.div>

        {/* Karty */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-lg mb-12"
        >
          <div className="flex bg-gray-800 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {["WebDesign", "GraphicDesign", "VideoEditing"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-center font-semibold text-lg relative z-10 transition-all ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab as "WebDesign" | "GraphicDesign" | "VideoEditing")}
              >
                {tab === "WebDesign"
                  ? "Web Design"
                  : tab === "GraphicDesign"
                  ? "Graphic Design"
                  : "Video Editing"}
                {/* Gradientní přechod */}
                <span
                  className={`absolute inset-0 z-[-1] transition-all duration-500 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-orange-400 to-pink-500"
                      : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

       {/* Projekty */}
       <div className="max-w-5xl mx-auto">
          {/* Web Design */}
          {activeTab === "WebDesign" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Zde jsou všechny vaše webové projekty */}
              <ProjectCardWithLink
                title="Modern Portfolio Website"
                image="/imgs/web-6.jpg"
                description="A clean, professional portfolio website tailored for creative professionals."
                comment="Client: John Doe | Built with React & TailwindCSS"
                url="https://modern-portfolio.com"
              />
              <ProjectCardWithLink
                title="E-Commerce Website"
                image="/imgs/web-3.png"
                description="An immersive shopping platform with smooth UI/UX."
                comment="Client: Boutique Store | Optimized for mobile devices"
                url="https://ecommerce-example.com"
              />
              <ProjectCardWithLink
                title="Landing Page Design"
                image="/imgs/web7.png"
                description="A visually stunning SaaS landing page to convert leads."
                comment="Client: SaaS Startup | Integrated with marketing tools"
                url="https://landing-page-example.com"
              />
              <ProjectCardWithLink
                title="Blog Website"
                image="/imgs/screen2.png"
                description="A responsive blog website with customizable themes."
                comment="Client: Blogger | Built with Next.js"
                url="https://blog-example.com"
              />
              {/* Přidejte další projekty zde, pokud máte */}
            </motion.div>
          )}

          {/* Graphic Design */}
          {activeTab === "GraphicDesign" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <ProjectCardSquare
                title="Spider-Man PS5 Concept Art"
                image="/imgs/playstation-10.png"
                description="A stunning Spider-Man concept art for PlayStation 5, capturing the essence of the game."
                comment="Personal Project | Designed with Adobe Photoshop"
              />
              <ProjectCardSquare
                title="God of War PS5 Concept Art"
                image="/imgs/playstastion-5.png"
                description="Epic God of War PlayStation 5 design, highlighting Kratos and Atreus."
                comment="Personal Project | Created using advanced compositing techniques"
              />
              <ProjectCardSquare
                title="PlayStation Controller Graphic"
                image="/imgs/playstation.png"
                description="A clean graphic design featuring a PS5 controller and top four PlayStation games."
                comment="Personal Work | Photoshop Layered Design"
              />
              <ProjectCardSquare
                title="Crash Team Racing PS4 Cover Art"
                image="/imgs/playstation-7.png"
                description="A playful Crash Team Racing PS4 concept art that sparks nostalgia."
                comment="Fan Project | Inspired by classic game design"
              />
              <ProjectCardSquare
                title="Alan Wake 2 PS5 Concept Art"
                image="/imgs/playstation-11.png"
                description="Moody Alan Wake 2 PS5 art featuring the game's haunting atmosphere."
                comment="Personal Project | Focused on cinematic lighting"
              />
              <ProjectCardSquare
                title="PlayStation Concept Art"
                image="/imgs/playstation-9.png"
                description="A sleek and modern PlayStation graphic design showcasing minimal aesthetics."
                comment="Personal Project | Designed with Adobe Photoshop"
              />
            </motion.div>
          )}

          {/* Video Editing */}
          {activeTab === "VideoEditing" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <ProjectCardVertical
                title="Corporate Video Editing"
                video="/imgs/FINAL - magnesium.webm"
                description="Professional corporate videos with smooth transitions."
                comment="Client: Tech Company | Edited with Adobe Premiere Pro"
              />
              <ProjectCardVertical
                title="Short Film Editing"
                video="/imgs/jimbo.webm"
                description="Cinematic storytelling with visual effects and sound design."
                comment="Client: Indie Filmmaker | Aired on streaming platforms"
              />
              <ProjectCardVertical
                title="YouTube Video Editing"
                video="/imgs/comp-satxy.mp4"
                description="Dynamic editing tailored for engaging YouTube audiences."
                comment="Client: Content Creator | 10x channel engagement"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

/* Web Design Card with URLs */
interface ProjectCardWithLinkProps {
  title: string;
  image: string;
  description: string;
  comment: string;
  url: string;
}

const ProjectCardWithLink: React.FC<ProjectCardWithLinkProps> = ({
  title,
  image,
  description,
  comment,
  url,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src={image}
          alt={title}
          fill // Použijeme prop 'fill' pro vyplnění rodičovského elementu
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <p className="text-xs text-orange-400 mt-1">{comment}</p>
      </div>
    </a>
  </motion.div>
);

/* Video Editing Card with 9:16 Aspect Ratio */
interface ProjectCardVerticalProps {
  title: string;
  video: string;
  description: string;
  comment: string;
}

const ProjectCardVertical: React.FC<ProjectCardVerticalProps> = ({
  title,
  video,
  description,
  comment,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <video
      src={video}
      title={title}
      className="aspect-[9/16] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      controls
      loop
      muted
      autoPlay
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      <p className="text-xs text-orange-400 mt-1">{comment}</p>
    </div>
  </motion.div>
);

/* Square Cards for Graphic Design */
interface ProjectCardSquareProps {
  title: string;
  image: string;
  description: string;
  comment: string;
}

const ProjectCardSquare: React.FC<ProjectCardSquareProps> = ({
  title,
  image,
  description,
  comment,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="relative w-full h-full aspect-square">
      <Image
        src={image}
        alt={title}
        fill // Použijeme prop 'fill' pro vyplnění rodičovského elementu
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      <p className="text-xs text-orange-400 mt-1">{comment}</p>
    </div>
  </motion.div>
);
