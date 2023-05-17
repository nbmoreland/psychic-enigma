"use client";

import { NavBar } from "../nav/navbar";
import ProjectSection from "../components/project/ProjectSection";

export default function ProjectsPage({ dark }: { dark: boolean }) {
  return (
    <div className={dark ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 min-h-screen">
        <NavBar dark={dark} />

        <ProjectSection showcase={false} />
      </main>
    </div>
  );
}
