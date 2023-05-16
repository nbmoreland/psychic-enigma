"use client";

import { NavBar } from "../nav/navbar";
import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen">
          <div className="lg:flex gap-10 mx-4 my-4">
            <h1>Welcome to the about page.</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
