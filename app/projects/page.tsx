"use client";

import { NavBar } from "../nav/navbar";
import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import ProjectSection from "../components/project/ProjectSection";

export default function ProjectsPage() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 min-h-screen">
        <NavBar />

        <ProjectSection
          showcase={false}
          img={"/../public/static/images/stock.jpg"}
        />
      </main>
    </div>
  );
}
