import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import { websites, projects, games } from "../data";

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
          {/* Games Section */}
          <ProjectSection title="Games" projects={games} />
        </div>
      </div>
    </section>
  );
}

// Reusable Project Section
function ProjectSection({ title, projects }) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-medium title-font text-white mb-8 border-b-2 border-green-400 pb-2 inline-block">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const renderSkills = () => {
    if (!project.skills) return null;
    
    const skillsArray = Array.isArray(project.skills) 
      ? project.skills 
      : project.skills.split(',');

    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {skillsArray.map((skill) => (
          <span key={skill} className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">
            {typeof skill === 'string' ? skill.trim() : skill}
          </span>
        ))}
      </div>
    );
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block"
      aria-label={`View ${project.title} project`}
    >
      <div className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/20">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black bg-opacity-70 transition-all duration-300 group-hover:bg-opacity-80">
          <span className="px-3 py-1 text-xs font-medium bg-green-400 text-gray-900 rounded-full mb-4">
            {project.subtitle}
          </span>
          <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-sm text-gray-300 text-center mb-4">{project.description}</p>
          {renderSkills()}
        </div>
      </div>
    </a>
  );
}
