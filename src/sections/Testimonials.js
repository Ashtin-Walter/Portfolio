import React from "react";
import { CommandLineIcon, UserIcon } from "@heroicons/react/24/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="animate-bounce-slow"><UserIcon className="w-10 inline-block mb-4 text-green-400" /></div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded transition-all duration-300 hover:bg-opacity-60 hover:shadow-lg">
                <CommandLineIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6 text-gray-300">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  {testimonial.image && (
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                  )}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
