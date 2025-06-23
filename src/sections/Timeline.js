import React, { useState } from 'react';
import { experience } from '../data';

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="timeline" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience Timeline
        </h2>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
          <div className="flex justify-between">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <button
                  className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <exp.icon className="w-6 h-6" />
                </button>
                <span className="text-sm font-medium mt-2 text-gray-700 dark:text-gray-300">
                  {exp.year}
                </span>
                {activeIndex === index && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-72 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-20">
                    <h3 className="font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    <p className="text-green-600 dark:text-green-400 text-sm">{exp.position}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center text-white">
                  <exp.icon className="w-5 h-5" />
                </div>
                {index < experience.length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</span>
                  </div>
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">{exp.position}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

