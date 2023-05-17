import { motion } from "framer-motion";

export default function SkillCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72 m-4 shrink-0"
    >
      <div className="p-4">
        {icon}
        <h3 className="font-bold text-xl mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
