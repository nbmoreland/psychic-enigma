import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProjectCard({
  title,
  description,
  image_src,
  github_uri,
}: {
  title: string;
  description: string;
  image_src: StaticImageData;
  github_uri: string;
}) {
  const requestData = async () => {
    const res = await fetch("https://api.github.com/users/nicholasmoreland");
    const data = await res.json();
    console.log(data);

    return data;
  };

  const requestRepos = async () => {
    const res = await fetch(
      "https://api.github.com/users/nicholasmoreland/repos"
    );
    const data = await res.json();
    console.log(data);

    return data;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden w-96 h-128 m-4 shrink-0"
    >
      <div className="relative h-48">
        <Image
          src={image_src}
          alt="Project Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-auto">
          {description}
        </p>

        <div className="fixed bottom-0 right-0 p-1.5 mx-2 mt-4 mb-2 ml-6">
          <motion.a
            whileTap={{ scale: 0.9 }}
            href={"https://github.com/nicholasmoreland/" + github_uri}
            className="text-slate-400 hover:text-slate-500"
          >
            <AiOutlineGithub className="fill-current h-7 w-7" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
