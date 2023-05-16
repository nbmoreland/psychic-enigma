"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import { RxMoon } from "react-icons/rx";

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-2 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <div className="flex items-center rounded-lg px-2">
              <Link
                href="/"
                className="relative flex items-center px-3 py-1 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                <Image
                  src="https://avatars.githubusercontent.com/u/46201019?v=4"
                  width={40}
                  height={40}
                  alt="Nick"
                  className="overflow-hidden rounded-full py-1 px-1"
                />
                <div className="flex flex-col pl-2 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <h1>Nicholas Moreland</h1>
                </div>
              </Link>
            </div>

            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-2">
                  <li>
                    <Link
                      href="/projects"
                      className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resume"
                      className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <RxMoon
                  onClick={handleToggleDarkMode}
                  className="cursor-pointer text-xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                />
                <a
                  href="https://github.com/nicholasmoreland"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Nicholas Moreland on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/nicholas-moreland-cse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <span className="sr-only">LinkedIn Profile</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22.516 2H1.485C0.65 2 0 2.651 0 3.485v17.03C0 21.349.65 22 1.485 22h21.03c.835 0 1.485-.651 1.485-1.485V3.485c0-.834-.65-1.485-1.485-1.485zM7.908 18.256h-3.07V9.062h3.07v9.194zM6.37 8.114h-.022c-.976 0-1.611-.678-1.611-1.529 0-.865.651-1.529 1.647-1.529.996 0 1.612.664 1.634 1.529.011.851-.612 1.529-1.648 1.529zM19.2 18.256h-3.076v-4.803c0-1.146-.41-1.929-1.435-1.929-.777 0-1.239.522-1.442 1.024-.074.18-.09.432-.09.686v4.022h-3.07s.04-8.354 0-9.194h3.07v1.301c.408-.623 1.132-1.506 2.753-1.506 2.018 0 3.532 1.318 3.532 4.175v5.224z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
