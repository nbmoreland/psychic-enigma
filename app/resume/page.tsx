"use client";

import { NavBar } from "../nav/navbar";

export default function ResumePage({ dark }: { dark: boolean }) {
  return (
    <div className={dark ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar dark={dark} />

        <section className="min-h-screen">
          <div className="lg:flex gap-10 mx-4 my-4">
            <h1>Welcome to the resume page</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
