"use client";

import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import ProjectCard from "./ProjectCard";
import stockcard from "../../../public/stock.jpg";

import typescript from "../../../public/icons/typescript.svg";
import javascript from "../../../public/icons/javascript.svg";
import css3 from "../../../public/icons/css3.svg";
import react from "../../../public/icons/react.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import express from "../../../public/icons/express.svg";

interface Project {
  title: string;
  github_uri: string;
  image_src: StaticImageData;
  icons: StaticImageData[];
}

const projects = [
  {
    title: "Psychic Enigma",
    github_uri: "psychic-enigma",
    image_src: stockcard,
    icons: [typescript, javascript, css3, react, nextjs],
  },
  {
    title: "Project Cherry API",
    github_uri: "project-cherry-api",
    image_src: stockcard,
    icons: [javascript, express],
  },
];

export default function ProjectSection({ showcase }: { showcase: boolean }) {
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Project[] = [];
      for (const project of projects) {
        const response = await fetch(
          `https://api.github.com/repos/nicholasmoreland/${project.github_uri}`
        );
        const projectData: Project = await response.json();
        data.push({ ...project, ...projectData });
      }
      setProjectData(data);
    };

    fetchData();
  }, []);

  let projects_displayed = projectData;

  if (showcase) projects_displayed = projectData.slice(0, 3);

  return (
    <div className="mx-auto min-w-screen pt-12 pb-2 px-2 lg:py-16 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
          Projects
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Here are some projects I have worked on
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          These are some of my recent projects. Click on a project to learn more
          about it.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center mt-3 m-2">
        {projects_displayed.map((project, index) => (
          <ProjectCard
            key={index}
            showcased={showcase}
            title={project.title}
            image_src={project.image_src as StaticImageData}
            icons_src={project.icons as StaticImageData[]}
          />
        ))}
      </div>
    </div>
  );
}
