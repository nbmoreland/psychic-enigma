import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden w-80 h-80 m-4">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {description}
        </p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
