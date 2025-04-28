import {
  CheckBadgeIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import React, { memo } from "react"; // Import memo
import { frontend, backend, productTools, designTools, devOps } from "../data";

export default function Skills() {
  return (
    // Remove bg/text from section
    <section id="skills" className="py-16">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16">
          <div className="animate-bounce-slow">
            {/* Use theme-aware classes */}
            <CpuChipIcon className="w-16 mx-auto text-green-500 dark:text-green-400 mb-4" />
          </div>
          {/* Use theme-aware classes */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h1>
          {/* Use theme-aware classes */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            A versatile full-stack developer with a keen eye for design and a passion for solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Frontend Development */}
          <SkillCard
            icon={<ComputerDesktopIcon className="w-6 h-6 text-blue-500 dark:text-blue-400" />}
            title="Frontend Dev"
            skills={frontend}
          />

          {/* Backend Development */}
          <SkillCard
            icon={<ServerStackIcon className="w-6 h-6 text-purple-500 dark:text-purple-400" />}
            title="Backend Dev"
            skills={backend}
          />

          {/* DevOps */}
          <SkillCard
            icon={<WrenchScrewdriverIcon className="w-6 h-6 text-green-500 dark:text-green-400" />}
            title="DevOps"
            skills={devOps}
          />

          {/* Product Tools */}
          <SkillCard
            icon={<ClipboardDocumentListIcon className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />}
            title="Product Tools"
            skills={productTools}
          />

          {/* Design Tools */}
          <SkillCard
            icon={<SwatchIcon className="w-6 h-6 text-pink-500 dark:text-pink-400" />}
            title="Design Tools"
            skills={designTools}
          />
        </div>

      </div>
    </section>
  );
}

// Wrap SkillCard with React.memo
const SkillCard = memo(function SkillCard({ icon, title, skills }) {
  return (
    // Use theme-aware classes
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
      {/* Use theme-aware classes */}
      <h3 className="flex flex-col items-center text-xl font-bold mb-6 text-gray-900 dark:text-white">
        <div className="mb-3 hover:rotate-icon">
          {icon}
        </div>
        {title}
      </h3>
      <div className="space-y-4">
        {skills?.map((skill, index) => (
          <div
            key={skill.name || skill}
            // Use theme-aware classes
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              {/* Use theme-aware classes */}
              <span className="text-sm font-medium flex items-center gap-2 text-gray-800 dark:text-gray-200">
                {/* Use theme-aware classes */}
                <CheckBadgeIcon className="text-green-500 dark:text-green-400 w-5 h-5" />
                {skill.name || skill}
              </span>
            </div>
            {skill.level && (
              // Use theme-aware classes
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div
                  // Use theme-aware classes
                  className="bg-green-500 dark:bg-green-400 h-2 rounded-full transition-all duration-500 animate-grow-width"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
