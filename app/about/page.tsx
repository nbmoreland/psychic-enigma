"use client";

import { useTheme } from "next-themes";
import { NavBar } from "../nav/navbar";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <NavBar />

        <div className="mx-auto min-w-screen pt-12 pb-2 px-2 lg:py-16 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
              About
            </h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Where are you from?
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              I was born and raised in Dallas, TX. My birthday is July 23, 1999.
            </p>

            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Where do you go to school?
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The University of Texas at Arlington.
            </p>

            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What are you studying?
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Bachelor of Science in Computer Science BSCS.
            </p>

            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What do you plan for after College?
            </p>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              I plan to go into the workforce as a software engineer while
              pursuing a Online Master of Science in Computer Science with
              Artificial Intelligence Specialization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
