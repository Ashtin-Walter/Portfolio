import {
  CheckBadgeIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import React, { memo } from "react";
import { frontend, backend, productTools, designTools, devOps } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container px-5 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="animate-bounce-slow">
            <CpuChipIcon className="w-16 mx-auto text-green-500 dark:text-green-400 mb-4" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            A versatile full-stack developer with a keen eye for design and a passion for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <SkillCard
            icon={<ComputerDesktopIcon className="w-8 h-8 text-blue-500 dark:text-blue-400" />}
            title="Frontend Development"
            description="Building responsive and intuitive user interfaces"
            skills={frontend}
            gradient="from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10"
          />

          <SkillCard
            icon={<ServerStackIcon className="w-8 h-8 text-purple-500 dark:text-purple-400" />}
            title="Backend Development"
            description="Creating robust and scalable server-side solutions"
            skills={backend}
            gradient="from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10"
          />

          <SkillCard
            icon={<WrenchScrewdriverIcon className="w-8 h-8 text-green-500 dark:text-green-400" />}
            title="DevOps"
            description="Streamlining deployment and development workflows"
            skills={devOps}
            gradient="from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10"
          />

          <SkillCard
            icon={<ClipboardDocumentListIcon className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />}
            title="Product Tools"
            description="Managing and organizing development processes"
            skills={productTools}
            gradient="from-yellow-500/20 to-orange-500/20 dark:from-yellow-500/10 dark:to-orange-500/10"
          />

          <SkillCard
            icon={<SwatchIcon className="w-8 h-8 text-pink-500 dark:text-pink-400" />}
            title="Design Tools"
            description="Creating beautiful and functional user experiences"
            skills={designTools}
            gradient="from-pink-500/20 to-rose-500/20 dark:from-pink-500/10 dark:to-rose-500/10"
          />
        </div>
      </div>
    </section>
  );
}

const SkillCard = memo(function SkillCard({ icon, title, description, skills, gradient }) {
  return (
    <div 
      className={`bg-gradient-to-br ${gradient} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
        overflow-hidden border border-gray-200 dark:border-gray-700 group h-full`}
    >
      <div className="h-full p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {skills?.map((skill, index) => (
            <div
              key={skill.name || skill}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 
                hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200
                flex items-center gap-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CheckBadgeIcon className="text-green-500 dark:text-green-400 w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                {skill.name || skill}
              </span>
              {skill.level && (
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-12 bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div
                      className="bg-green-500 dark:bg-green-400 h-1 rounded-full transition-all duration-500 
                        animate-grow-width"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 min-w-[2rem]">
                    {skill.level}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
