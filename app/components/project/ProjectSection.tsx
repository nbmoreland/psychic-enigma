import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import ProjectCard from "./ProjectCard";
import psychic from "../../../public/psychic.png";
import stockcard from "../../../public/stock.jpg";

interface Project {
  title: string;
  description: string;
  image_src: StaticImageData;
  github_uri: string;

  name: string;
}

const projects = [
  {
    title: "Psychic Enigma",
    description:
      "A personal showcase of my software development skills. Built with TailwindCSS, React, and Next.js, it features a collection of recent projects highlighting my expertise in creating intuitive UIs, responsive layouts, and high-performance web applications.",
    image_src: psychic,
    github_uri: "psychic-enigma",
  },
  {
    title: "Project Cherry API",
    description:
      "This project showcases an Express.js API for managing users, leveraging MongoDB for data storage. Integration of key modules, including Express, MongoDB, CORS, and JSON data parsing, provides routes for user-related operations, allowing seamless handling of user data through HTTP requests.",
    image_src: stockcard,
    github_uri: "project-cherry-api",
  },
  {
    title: "Project Cherry Frontend",
    description:
      "Nullam ac elit nec metus porttitor dignissim. Etiam ac lacus interdum, bibendum augue a, pharetra ante.",
    image_src: stockcard,
    github_uri: "project-cherry-frontend",
  },
  {
    title: "Juice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales bibendum purus, et fringilla lacus volutpat eget.",
    image_src: stockcard,
    github_uri: "Juice",
  },
  {
    title: "RPN Calculator",
    description:
      "Vivamus at augue ut turpis bibendum blandit. Fusce vel dolor sit amet est faucibus mattis. Aiacs aw oecae.",
    image_src: stockcard,
    github_uri: "rpn-calculator",
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
        data.push({ ...project, name: projectData.name });
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
            title={project.name}
            description={project.description}
            image_src={project.image_src as StaticImageData}
            github_uri={project.github_uri}
          />
        ))}
      </div>
    </div>
  );
}
