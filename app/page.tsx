"use client";

import Image from "next/image";
import ProjectSection from "./components/project/ProjectSection";
import SkillSection from "./components/skill/SkillSection";
import devnick from "../public/dev-nick-wave.png";

import { motion } from "framer-motion";
import { NavBar } from "./nav/navbar";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="snap-start min-h-screen">
          <div className="mx-auto max-w-7xl mt-12 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Hi, I am Nicholas Moreland
              </h1>
              <p className="mt-8 text-xl text-gray-700 dark:text-gray-400">
                I am a full-time student and aspiring software engineer. I am
                passionate about creating clean and efficient code that solves
                real-world problems.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              className="relative mx-auto bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600
 rounded-full w-80 h-80 mt-20 overflow-hidden"
            >
              <Image
                src={devnick}
                className="rounded-full object-cover w-full h-full"
                alt="Profile"
              />
            </motion.div>
          </div>
        </section>

        <section className="snap-start min-h-screen bg-gray-50 dark:bg-gray-800">
          <ProjectSection showcase={true} />
        </section>

        <section className="snap-start min-h-screen bg-white dark:bg-gray-900">
          <SkillSection />
        </section>
      </main>
    </div>
  );
}
