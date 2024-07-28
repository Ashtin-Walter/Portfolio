import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ashtin.
            <br className="hidden lg:inline-block" />I love to build.
          </h1>
          <p className="mb-8 leading-relaxed">
            Whether building websites and apps or building skills in music,
            gardening, business and coding, I love to build. I believe working
            together allows people to achieve results and build things that
            would never have been possible alone. Let's work together and build
            something amazing.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Work With Me
            </a>
          </div>
          <div class="flex pl-14 pt-2 space-x-4">
            <div>
              <a href="https://github.com/AshtinJW-Dev" target="blank">
                <i class="fa-brands fa-github text-xl hover:text-green-700"></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ashtin-walter-b60709250/"
                target="blank"
              >
                <i class="fa-brands fa-linkedin text-xl hover:text-green-700"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="ashtin"
            src="images/ash-pic.png"
          />
        </div>
      </div>
    </section>
  );
}
