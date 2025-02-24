import React from "react";

export default function Landing() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ashtin.
            <br className="hidden lg:inline-block" />I love to build amazing things.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am passionate about creating websites, apps, and developing skills in music, gardening, business, and coding. Collaboration is key to achieving extraordinary results. Let's build something incredible together.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              aria-label="View Portfolio"
            >
              View Portfolio
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              aria-label="View Skills & Technologies"
            >
              Skills & Technologies
            </a>
            <div className="flex pl-14 pt-2 space-x-4">
              <a href="https://github.com/AshtinJW-Dev" target="_blank"  rel="noreferrer" aria-label="GitHub Profile">
                <i className="fa-brands fa-github text-xl hover:text-green-700"></i>
              </a>
              <a href="https://www.linkedin.com/in/ashtin-walter-b60709250/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <i className="fa-brands fa-linkedin text-xl hover:text-green-700"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="ambient-background">
            <img
              className="object-cover object-center rounded"
              alt="Ashtin"
              src="images/ash-pic.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
