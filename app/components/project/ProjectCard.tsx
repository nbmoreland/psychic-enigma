import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { IoGitBranchOutline } from "react-icons/io5";

export default function ProjectCard({
  title,
  description,
  image_uri,
  githubUrl,
}: {
  title: string;
  description: string;
  image_uri: StaticImageData;
  githubUrl: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden w-96 h-96 m-4 shrink-0"
    >
      <div className="relative h-48">
        <Image
          src={image_uri}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="flex justify-end py-1.5px-1.5 mx-2 mt-4 mb-2">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://github.com/nicholasmoreland"
          className="ml-6 block text-slate-400 hover:text-slate-500"
        >
          <IoGitBranchOutline className="fill-current h-7 w-7" />
        </motion.a>
      </div>
    </motion.div>
  );
}
