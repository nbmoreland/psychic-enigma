import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales bibendum purus, et fringilla lacus volutpat eget.",
    imageUrl: "/../public/static/images/dev-nick-wave.png",
    githubUrl: "https://github.com/user/project1",
  },
  {
    title: "Project 2",
    description:
      "Vivamus at augue ut turpis bibendum blandit. Fusce vel dolor sit amet est faucibus mattis",
    imageUrl: "/../public/static/images/dev-nick-wave.png",
    githubUrl: "https://github.com/user/project2",
  },
  {
    title: "Project 3",
    description:
      "Nullam ac elit nec metus porttitor dignissim. Etiam ac lacus interdum, bibendum augue a, pharetra ante.",
    imageUrl: "../public/static/images/stock.jpg",
    githubUrl: "https://github.com/user/project3",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales bibendum purus, et fringilla lacus volutpat eget.",
    imageUrl: "../public/static/images/stock.jpg",
    githubUrl: "https://github.com/user/project1",
  },
  {
    title: "Project 5",
    description:
      "Vivamus at augue ut turpis bibendum blandit. Fusce vel dolor sit amet est faucibus mattis",
    imageUrl: "../public/static/images/stock.jpg",
    githubUrl: "https://github.com/user/project2",
  },
  {
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales bibendum purus, et fringilla lacus volutpat eget.",
    imageUrl: "../public/static/images/stock.jpg",
    githubUrl: "https://github.com/user/project1",
  },
  {
    title: "Project 8",
    description:
      "Vivamus at augue ut turpis bibendum blandit. Fusce vel dolor sit amet est faucibus mattis",
    imageUrl: "../public/static/images/stock.jpg",
    githubUrl: "https://github.com/user/project2",
  },
  {
    title: "Project 9",
    description:
      "Nullam ac elit nec metus porttitor dignissim. Etiam ac lacus interdum, bibendum augue a, pharetra ante.",
    imageUrl: "../public/static/images/stock.jpg",
    githubUrl: "https://github.com/user/project3",
  },
];

export default function ProjectSection({
  showcase,
  img,
}: {
  showcase: boolean;
  img: string;
}) {
  let projects_displayed = projects;

  if (showcase) projects_displayed = projects.slice(0, 3);

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
            title={project.title}
            description={project.description}
            imageUrl={img}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}
