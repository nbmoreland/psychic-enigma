"use client";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";

import NavBar from "./nav/navbar";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white dark:bg-black">
        <NavBar />

        <section className="min-h-screen">
          <div className="text-center">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Nicholas Moreland
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Full Stack developer showcasing my personal projects. Check down
              below for more!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <GrLinkedin className="hover:text-sky-700" />
            <GoMarkGithub className="hover:text-violet-700" />
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} fill style={{ objectFit: "cover" }} alt={""} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portofolio</h3>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center">
              <Image src={design} width={100} height={100} alt={""} />
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

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center">
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

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center">
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

        <section>
          <div>
            <h3 className="text-3xl py-1">Frameworks</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
