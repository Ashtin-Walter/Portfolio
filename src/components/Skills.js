import {
  CheckBadgeIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  CursorArrowRaysIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import {
  frontend,
  backend,
  digitalMarketing,
  graphicDesign,
} from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A fullstack developer with an eye for design and knack for solving
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-700 p-4 rounded shadow text-center ">
            <h3 className="flex flex-col items-center text-center">
              <ComputerDesktopIcon className="w-5" />
              Frontend
            </h3>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {frontend?.map((frontend) => (
                <div key={frontend} className="p-2 w-full">
                  <div className="bg-gray-800 rounded flex p-2 h-full items-center">
                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {frontend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-700 p-4 rounded shadow text-center">
            <h3 className="flex flex-col items-center text-center">
              <ServerStackIcon className="w-5" />
              Backend
            </h3>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {backend?.map((backend) => (
                <div key={backend} className="p-2  w-full">
                  <div className="bg-gray-800 rounded flex p-2 h-full w-full items-center">
                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white ">
                      {backend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-700 p-4 rounded shadow text-center">
            <h3 className="flex flex-col items-center text-center">
              <CursorArrowRaysIcon className="w-5" />
              Digital Marketing
            </h3>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {digitalMarketing?.map((digitalMarketing) => (
                <div key={digitalMarketing} className="p-2  w-full">
                  <div className="bg-gray-800 rounded flex p-2 h-full w-full items-center">
                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white ">
                      {digitalMarketing}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-700 p-4 rounded shadow text-center">
            <h3 className="flex flex-col items-center text-center">
              <PaintBrushIcon className="w-5" />
              Graphic Design
            </h3>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {graphicDesign?.map((graphicDesign) => (
                <div key={graphicDesign} className="p-2  w-full">
                  <div className="bg-gray-800 rounded flex p-2 h-full w-full items-center">
                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white ">
                      {graphicDesign}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
