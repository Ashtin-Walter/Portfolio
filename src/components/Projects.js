import { BeakerIcon } from "@heroicons/react/24/solid";
import React from "react";
import { websites, projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BeakerIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            What I've Built.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have been lucky to work with a range of amazing clients that I
            have been able to learn so much from. I am also always working on
            something new in my personal time, to grow and practice different
            skills, so watch this space.
          </p>
        </div>
        <div className="flex -m-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Websites
          </h1>
          {websites.map((website) => (
            <a
              href={website.link}
              key={website.image}
              className="sm:w-1/2 w-100 p-4"
              target="blank"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 object-cover object-center"
                  src={website.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {website.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {website.title}
                  </h1>
                  <p className="leading-relaxed">{website.description}</p>
                  <div class="flex justify-center">
                    <div>{website.skills}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex -m-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal <br></br> Projects
          </h1>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              target="blank"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-80 h-64 object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-80 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div class="flex justify-center">
                    <div>{project.skills}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
