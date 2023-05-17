"use client";

import { NavBar } from "../nav/navbar";
import ProjectSection from "../components/project/ProjectSection";

export default function ProjectsPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <NavBar />

      <ProjectSection showcase={false} />
    </main>
  );
}
