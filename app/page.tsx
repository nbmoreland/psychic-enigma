"use client";

import NavBar from "./nav/navbar";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import devnick from "../public/dev-nick-wave.png";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen">
          <div className="mx-auto max-w-7xl mt-12 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Nicholas Moreland
              </h1>
              <p className="mt-8 text-xl text-gray-700 dark:text-gray-400">
                I'm a full-time student and aspiring software engineer. I'm
                passionate about creating clean and efficient code that solves
                real-world problems.
              </p>
            </div>
            <div
              className="relative mx-auto bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600
 rounded-full w-80 h-80 mt-20 overflow-hidden"
            >
              <Image
                src={devnick}
                className="rounded-full object-cover w-full h-full"
                alt="Profile"
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                Projects
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Here are some projects I've worked on
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                These are some of my recent projects. Click on a project to
                learn more about it.
              </p>
            </div>

            <div className="flex flex-wrap justify-center">
              <ProjectCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales bibendum purus, et fringilla lacus volutpat eget."
                imageUrl="/../public/stock.jpg"
                liveUrl=""
                githubUrl=""
              />
              <ProjectCard
                title="Project 2"
                description="Vivamus at augue ut turpis bibendum blandit. Fusce vel dolor sit amet est faucibus mattis."
                imageUrl="/../public/stock.jpg"
                liveUrl=""
                githubUrl=""
              />
              <ProjectCard
                title="Project 3"
                description="Nullam ac elit nec metus porttitor dignissim. Etiam ac lacus interdum, bibendum augue a, pharetra ante."
                imageUrl="/../public/stock.jpg"
                liveUrl=""
                githubUrl=""
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                Skills
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Here are some of my skills
              </p>
            </div>

            <div className="mt-4 flex flex-wrap justify-center">
              <SkillCard
                title="Web Development"
                description="I have experience building responsive web applications using HTML, CSS, JavaScript, React, and Node.js."
                icon={<i className="devicon-html5-plain colored text-5xl"></i>}
              />
              <SkillCard
                title="Mobile Development"
                description="I have experience building mobile applications using React Native."
                icon={
                  <i className="devicon-react-original colored text-5xl"></i>
                }
              />
              <SkillCard
                title="Backend Development"
                description="I have experience building APIs and server-side applications using Node.js and Express."
                icon={<i className="devicon-nodejs-plain colored text-5xl"></i>}
              />
              <SkillCard
                title="Database Management"
                description="I have experience with database technologies such as SQL, MongoDB, and Firebase."
                icon={
                  <i className="devicon-mongodb-plain-wordmark colored text-5xl"></i>
                }
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
