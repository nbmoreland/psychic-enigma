"use client";

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
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden w-64 h-80 m-4">
      <div className="p-4">
        {icon}
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
