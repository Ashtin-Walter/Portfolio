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
    <section id="skills" className="bg-gray-900 text-white py-16">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16">
          <div className="animate-bounce-slow">
            <CpuChipIcon className="w-16 mx-auto text-green-400 mb-4" />
          </div>
          <h1 className="text-4xl font-bold">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            A versatile full-stack developer with a keen eye for design and a passion for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      <h3 className="flex flex-col items-center text-xl font-bold mb-6">
        <div className="mb-3 hover:rotate-icon">
          {icon}
        </div>
        {title}
      </h3>
      <div className="space-y-4">
        {skills?.map((skill, index) => (
          <div
            key={skill.name || skill}
            className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium flex items-center gap-2">
                <CheckBadgeIcon className="text-green-400 w-5 h-5" />
                {skill.name || skill}
              </span>
            </div>
            {skill.level && (
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-green-400 h-2 rounded-full transition-all duration-500 animate-grow-width"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
