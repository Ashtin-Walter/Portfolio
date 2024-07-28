import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Certifications
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Always learning and growing.
          </p>
        </div>
        <div class=" mx-auto p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="p-4 rounded flex flex-col items-center">
              <a
                href="https://www.freecodecamp.org/certification/AshtinJW/responsive-web-design"
                target="_blank"
              >
                <GlobeAltIcon className="w-20 h-20" />
              </a>

              <p>Responsive Web Design</p>
            </div>
            <div class=" p-4 rounded flex flex-col items-center">
              <a
                href="https://www.freecodecamp.org/certification/AshtinJW/javascript-algorithms-and-data-structures"
                target="_blank"
              >
                <CodeBracketIcon className="w-20 h-20" />
              </a>
              <p>
                Legacy JavaScript Algorithms and Data Structures Certification
              </p>
            </div>
            <div class="p-4 rounded flex flex-col items-center">
              <a href="#" target="_blank">
                <ClipboardDocumentCheckIcon className="w-20 h-20" />
              </a>
              <p>Front End Development Libraries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
