"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectSection({}) {
  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Projects
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Here are some projects I've worked on
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          These are some of my recent projects. Click on a project to learn more
          about it.
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
  );
}
