"use client";

import { NavBar } from "../nav/navbar";

export default function ResumePage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <NavBar />

      <div className="mx-auto min-w-screen pt-12 pb-2 px-2 lg:py-16 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Resume
          </h2>
        </div>
      </div>
    </main>
  );
}
