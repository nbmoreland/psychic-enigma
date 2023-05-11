"use client";

import Image from "next/image";
import { DiGithubFull } from "react-icons/di";
import stock from "../../public/stock.jpg";

import NavBar from "../nav/navbar";
import { useState } from "react";

export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen">
          <div className="lg:flex gap-10 mx-4 my-4">
            <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-xl" src={stock} alt="" />
              <div className="px-4 pt-5 pb-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project One
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Details about project one.
                </p>
              </div>
              <div className="flex justify-end pr-3 rounded-b-xl">
                <DiGithubFull
                  href=""
                  size="48"
                  className="cursor-pointer text-xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                />
              </div>
            </div>
            <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-xl" src={stock} alt="" />
              <div className="px-4 pt-5 pb-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Two
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Details about project two.
                </p>
              </div>
              <div className="flex justify-end pr-3 rounded-b-xl">
                <DiGithubFull
                  href=""
                  size="48"
                  className="cursor-pointer text-xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                />
              </div>
            </div>
            <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-xl" src={stock} alt="" />
              <div className="px-4 pt-5 pb-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Three
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Details about project three.
                </p>
              </div>
              <div className="flex justify-end pr-3 rounded-b-xl">
                <DiGithubFull
                  href=""
                  size="48"
                  className="cursor-pointer text-xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
