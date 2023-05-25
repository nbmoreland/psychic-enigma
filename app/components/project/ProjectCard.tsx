import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  showcased,
  title,
  image_src,
  icons_src,
}: {
  showcased: boolean;
  title: string;
  image_src: StaticImageData;
  icons_src: StaticImageData[];
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
      className={
        (showcased ? "dark:bg-gray-900" : "bg-white dark:bg-gray-800") +
        " rounded-lg shadow-xl overflow-hidden w-96 h-128 m-4 shrink-0"
      }
    >
      <div className="relative h-48">
        <Image
          src={image_src}
          alt="Project Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-4 pt-4 pb-2">
        <h3 className="font-bold text-xl mb-2 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-row px-4 pb-4 space-x-3">
        {icons_src.map((icon, index) => {
          return (
            <motion.div whileHover={{ scale: 1.2 }} key={index}>
              <Image src={icon} alt="Project Icon" width={36} height={36} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
