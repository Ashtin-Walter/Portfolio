import { BookOpenIcon, PlayCircleIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import React from "react";

const books = [
  { title: "Steve Jobs", author: "Walter Isaacson", progress: "70%" },
];

const courses = [
  { name: "Front End Development Libraries", platform: "Free Code Camp", link: "https://www.freecodecamp.org/learn/front-end-development-libraries" },
];

const newTech = ["Nginx", "Self-Hosting", "AI Tools"];

export default function LearningResearch() {
  return (
    <section id="learning-research" className="py-12 bg-gray-900 text-white">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <LightBulbIcon className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
            Continuous Learning & Research
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-300">
            Delving into new technologies, honing skills, and staying ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Books */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <BookOpenIcon className="w-6 h-6 text-blue-400 mr-2" /> Books I'm Currently Reading
            </h2>
            <ul className="space-y-3 text-gray-300">
              {books.map((book, index) => (
                <li key={index} className="border-l-4 border-blue-500 pl-3">
                  <span className="font-medium">{book.title}</span> by {book.author} - {book.progress} completed
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <PlayCircleIcon className="w-6 h-6 text-green-400 mr-2" /> Courses I'm Enrolled In
            </h2>
            <ul className="space-y-3 text-gray-300">
              {courses.map((course, index) => (
                <li key={index} className="border-l-4 border-green-500 pl-3">
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
                    {course.name}
                  </a> - {course.platform}
                </li>
              ))}
            </ul>
          </div>

          {/* New Technologies */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <LightBulbIcon className="w-6 h-6 text-yellow-400 mr-2" /> New Technologies I'm Exploring
            </h2>
            <ul className="space-y-3 text-gray-300">
              {newTech.map((tech, index) => (
                <li key={index} className="border-l-4 border-yellow-500 pl-3">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
