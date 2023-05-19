"use client";

import { NavBar } from "../nav/navbar";
import ProjectSection from "../components/project/ProjectSection";
import { useTheme } from "next-themes";

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <NavBar />

        <ProjectSection showcase={false} />
      </div>
    </div>
  );
}
