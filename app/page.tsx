"use client";

import Image from "next/image";
import { DiGithubFull } from "react-icons/di";
import imageone from "../public/image-1.jpg";
import consulting from "../public/consulting.png";

import NavBar from "./nav/navbar";
import { useState } from "react";

/*
                <Image
                  src={cherry}
                  width={400}
                  height={200}
                  alt={""}
                  className="rounded-tr-xl rounded-tl-xl"
                />
*/

/*
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
*/

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen">
          <div className="lg:flex gap-10 mx-4 my-4">
            <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="rounded-t-xl" src={imageone} alt="" />
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
              <Image className="rounded-t-xl" src={imageone} alt="" />
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
              <Image className="rounded-t-xl" src={imageone} alt="" />
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
