import { BookOpenIcon, PlayCircleIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import React from "react";

const books = [
  { title: "Steve Jobs", author: "Walter Isaacson", progress: 70 },
  { title: "Clean Code", author: "Robert C. Martin", progress: 85 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", progress: 60 },
];

const courses = [
  { name: "Front End Development Libraries", platform: "Free Code Camp", link: "https://www.freecodecamp.org/learn/front-end-development-libraries" },
  { name: "Advanced JavaScript Concepts", platform: "Udemy", link: "https://www.udemy.com/course/advanced-javascript-concepts" },
  { name: "System Design for Developers", platform: "Coursera", link: "https://www.coursera.org/learn/system-design" },
];

const newTech = {
  "Development": ["Next.js", "GraphQL", "TypeScript"],
  "DevOps": ["Nginx", "Docker", "CI/CD"],
  "AI/ML": ["TensorFlow", "AI Tools", "Machine Learning"],
};

export default function LearningResearch() {
  return (
    <section id="learning-research" className="py-12 bg-gray-900 text-white">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <div className="animate-bounce-slow"><LightBulbIcon className="w-12 h-12 mx-auto text-yellow-400 mb-4" /></div>
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
            Continuous Learning & Research
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-300">
            Delving into new technologies, honing skills, and staying ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Books */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <BookOpenIcon className="w-6 h-6 text-blue-400 mr-2" /> Books I'm Currently Reading
            </h2>
            <ul className="space-y-4 text-gray-300">
              {books.map((book, index) => (
                <li key={index} className="border-l-4 border-blue-500 pl-3">
                  <span className="font-medium block">{book.title}</span>
                  <span className="text-sm text-gray-400">by {book.author}</span>
                  <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <PlayCircleIcon className="w-6 h-6 text-green-400 mr-2" /> Online Learning
            </h2>
            <ul className="space-y-4 text-gray-300">
              {courses.map((course, index) => (
                <li key={index} className="border-l-4 border-green-500 pl-3 hover:bg-gray-700 transition-colors">
                  <a href={course.link} target="_blank" rel="noopener noreferrer" 
                     className="block p-2">
                    <span className="text-green-300 font-medium block hover:text-green-200">
                      {course.name}
                    </span>
                    <span className="text-sm text-gray-400">{course.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* New Technologies */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold flex items-center mb-4">
              <LightBulbIcon className="w-6 h-6 text-yellow-400 mr-2" /> Technologies I'm Exploring
            </h2>
            <div className="space-y-4">
              {Object.entries(newTech).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="text-yellow-400 font-medium mb-2">{category}</h3>
                  <ul className="space-y-2">
                    {techs.map((tech, index) => (
                      <li key={index} className="border-l-4 border-yellow-500 pl-3 py-1">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
