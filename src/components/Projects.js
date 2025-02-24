import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import { websites, projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <BeakerIcon className="mx-auto w-10 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I’ve worked on a diverse range of projects, both for clients and personal growth. 
            Here are some of the highlights.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-10">
          {/* Websites Section */}
          <ProjectSection title="Websites" projects={websites} />
          {/* Personal Projects Section */}
          <ProjectSection title="Personal Projects" projects={projects} />
        </div>
      </div>
    </section>
  );
}

// Reusable Project Section
function ProjectSection({ title, projects }) {
  return (
    <div>
      <h2 className="text-3xl font-medium title-font text-white mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.image} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative group" aria-label={`View details of ${project.title}`}>
      <div className="relative h-64 w-full overflow-hidden rounded-lg border-4 border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 transition-transform transform group-hover:scale-105">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 bg-black bg-opacity-60 group-hover:bg-opacity-80">
          <h3 className="text-green-400 text-sm font-medium">{project.subtitle}</h3>
          <h2 className="text-lg font-semibold text-white">{project.title}</h2>
          <p className="text-sm text-gray-300 mt-2 text-center">{project.description}</p>
          <div className="mt-2 text-green-400">{project.skills}</div>
        </div>
      </div>
    </a>
  );
}
