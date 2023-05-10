"use client";

import Image from "next/image";
import cherry from "../public/pattern-of-fresh-cherries-on-pink-background-GEMF03873.jpg";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import NavBar from "./nav/navbar";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen">
          <div className="lg:flex gap-10 mx-4 my-4">
            <div className="bg-white text-center shadow-lg rounded-xl flex flex-col">
              <div className="border-slate-900/10 dark:border-slate-300/10 w-96 align-top mb-10">
                <Image
                  src={cherry}
                  width={400}
                  height={200}
                  alt={""}
                  className="rounded-tr-xl rounded-tl-xl"
                />

                <h3 className="text-lg font-medium pt-1">Project Cherry</h3>
              </div>
            </div>

            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center">
              <Image src={code} width={100} height={100} alt={""} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited from your needs.
              </p>
              <h4 className="text-teal-600 py-4">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center">
              <Image src={consulting} width={100} height={100} alt={""} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited from your needs.
              </p>
              <h4 className="text-teal-600 py-4">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
