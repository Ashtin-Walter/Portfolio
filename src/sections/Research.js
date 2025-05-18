import { BookOpenIcon, PlayCircleIcon, LightBulbIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const books = [
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams ", progress: 10 },
];

// Add array of completed books
const completedBooks = [
  { title: "Atomic Habits", author: "James Clear" },
  // { title: "The Lean Startup", author: "Eric Ries" },
  // { title: "Zero to One", author: "Peter Thiel" },
  { title: "Steve Jobs", author: "Walter Isaacson" },
];

const courses = [
  { name: "Data Visualization", platform: "Free Code Camp", link: "https://www.freecodecamp.org/learn/data-visualization/" },
];

const newTech = {
  "Development": ["Next.js", "GraphQL", "TypeScript"],
  "DevOps": ["Nginx", "Docker", "CI/CD"],
  "AI/ML": ["TensorFlow", "AI Tools", "Machine Learning"],
};

export default function LearningResearch() {
  // Add state for modal visibility
  const [showCompletedBooks, setShowCompletedBooks] = useState(false);
  
  return (
    // Remove bg/text from section
    <section id="learning-research" className="py-12">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          {/* Use theme-aware classes */}
          <div className="animate-bounce-slow"><LightBulbIcon className="w-12 h-12 mx-auto text-yellow-500 dark:text-yellow-400 mb-4" /></div>
          {/* Use theme-aware classes */}
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white">
            Continuous Learning & Research
          </h1>
          {/* Use theme-aware classes */}
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Delving into new technologies, honing skills, and staying ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Books */}
          {/* Use theme-aware classes */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            {/* Use theme-aware classes */}
            <h2 className="text-2xl font-semibold flex items-center mb-4 text-gray-900 dark:text-white">
              {/* Use theme-aware classes */}
              <BookOpenIcon className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-2" /> Books I'm Currently Reading
            </h2>
            {/* Use theme-aware classes */}
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              {books.map((book, index) => (
                <li key={index} className="border-l-4 border-blue-500 pl-3">
                  <span className="font-medium block">{book.title}</span>
                  {/* Use theme-aware classes */}
                  <span className="text-sm text-gray-500 dark:text-gray-400">by {book.author}</span>
                  {/* Use theme-aware classes */}
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Add button to show completed books modal */}
            <button
              onClick={() => setShowCompletedBooks(true)}
              // Use theme-aware classes
              className="mt-6 py-2 px-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg
                         transition-colors flex items-center justify-center w-full"
            >
              <BookOpenIcon className="w-5 h-5 mr-2" />
              View Completed Books
            </button>
          </div>

          {/* Courses */}
          {/* Use theme-aware classes */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            {/* Use theme-aware classes */}
            <h2 className="text-2xl font-semibold flex items-center mb-4 text-gray-900 dark:text-white">
              {/* Use theme-aware classes */}
              <PlayCircleIcon className="w-6 h-6 text-green-500 dark:text-green-400 mr-2" /> Online Learning
            </h2>
            {/* Use theme-aware classes */}
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              {courses.map((course, index) => (
                // Use theme-aware classes
                <li key={index} className="border-l-4 border-green-500 pl-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-r-md">
                  <a href={course.link} target="_blank" rel="noopener noreferrer"
                     className="block p-2">
                    {/* Use theme-aware classes */}
                    <span className="text-green-600 dark:text-green-300 font-medium block hover:text-green-700 dark:hover:text-green-200">
                      {course.name}
                    </span>
                    {/* Use theme-aware classes */}
                    <span className="text-sm text-gray-500 dark:text-gray-400">{course.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* New Technologies */}
          {/* Use theme-aware classes */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            {/* Use theme-aware classes */}
            <h2 className="text-2xl font-semibold flex items-center mb-4 text-gray-900 dark:text-white">
              {/* Use theme-aware classes */}
              <LightBulbIcon className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-2" /> Technologies I'm Exploring
            </h2>
            <div className="space-y-4">
              {Object.entries(newTech).map(([category, techs]) => (
                <div key={category}>
                  {/* Use theme-aware classes */}
                  <h3 className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">{category}</h3>
                  {/* Use theme-aware classes */}
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
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

      {/* Completed Books Modal */}
      {showCompletedBooks && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          {/* Use theme-aware classes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto border border-gray-300 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              {/* Use theme-aware classes */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                {/* Use theme-aware classes */}
                <BookOpenIcon className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-2" />
                Completed Books
              </h3>
              <button
                onClick={() => setShowCompletedBooks(false)}
                // Use theme-aware classes
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            {/* Use theme-aware classes */}
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              {completedBooks.map((book, index) => (
                <li key={index} className="border-l-4 border-green-500 pl-3 py-2">
                  {/* Use theme-aware classes */}
                  <span className="font-medium block text-gray-800 dark:text-white">{book.title}</span>
                  {/* Use theme-aware classes */}
                  <span className="text-sm text-gray-500 dark:text-gray-400">by {book.author}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
