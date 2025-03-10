import {
  CheckBadgeIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  CursorArrowRaysIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { frontend, backend, digitalMarketing, graphicDesign, devOps } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-10">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <CpuChipIcon className="w-12 mx-auto text-green-400 mb-4" />
          <h1 className="text-4xl font-bold">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            A versatile full-stack developer with a keen eye for design and a passion for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Frontend Development */}
          <SkillCard
            icon={<ComputerDesktopIcon className="w-6 h-6 text-blue-400" />}
            title="Frontend Dev"
            skills={frontend}
          />

          {/* Backend Development */}
          <SkillCard
            icon={<ServerStackIcon className="w-6 h-6 text-purple-400" />}
            title="Backend Dev"
            skills={backend}
          />

          {/* DevOps */}
          <SkillCard
            icon={<WrenchScrewdriverIcon className="w-6 h-6 text-green-400" />}
            title="DevOps"
            skills={devOps}
          />

          {/* Digital Marketing */}
          <SkillCard
            icon={<CursorArrowRaysIcon className="w-6 h-6 text-yellow-400" />}
            title="Digital Marketing"
            skills={digitalMarketing}
          />

          {/* Graphic Design */}
          <SkillCard
            icon={<PaintBrushIcon className="w-6 h-6 text-pink-400" />}
            title="Graphic Design"
            skills={graphicDesign}
          />
        </div>

      </div>
    </section>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
      <h3 className="flex flex-col items-center text-lg font-semibold mb-3">
        {icon}
        {title}
      </h3>
      <div className="flex flex-wrap justify-center">
        {skills?.map((skill) => (
          <div key={skill} className="w-full">
            <div className="bg-gray-700 rounded flex flex-col items-center p-2 h-full">
              <CheckBadgeIcon className="text-green-400 w-6 h-6 mb-2" />
              <span className="text-sm font-medium">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
