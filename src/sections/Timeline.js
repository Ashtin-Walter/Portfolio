import React, { useState, memo } from 'react';
import {
  DocumentTextIcon,
  CodeBracketIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/solid';

const ExperienceTimeline = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      company: 'MPC Recruitment',
      position: 'Language Consultant',
      period: 'Feb 2017 - Sep 2017',
      year: '2017',
      location: 'Durban, South Africa',
      type: 'Full-time',
      description: 'Provided English tutoring and language support to students of varying ages and proficiency levels.',
      skills: ['Teaching', 'Communication', 'Problem Solving', 'Mentorship'],
      icon: UserGroupIcon
    },
    {
      company: 'The Fro Co.',
      position: 'Owner',
      period: 'Jan 2018 - Aug 2021',
      year: '2018',
      location: 'Durban, South Africa',
      type: 'Full-time',
      description: 'Owned and operated a successful vegan ice cream business serving markets across Durban.',
      skills: ['Small Business', 'Graphic Design', 'Digital Marketing', 'Communication', 'Sales'],
      icon: ShoppingCartIcon
    },
    {
      company: 'Rev',
      position: 'Transcriptionist',
      period: '2021 - 2023',
      year: '2021',
      location: 'Cape Town, South Africa',
      type: 'Freelance',
      description: 'Specialized in accurate transcription of audio and video content, ensuring high-quality deliverables for various clients.',
      skills: ['Digital Dictation', 'Transcribing', 'Typing', 'Active Listening'],
      icon: DocumentTextIcon
    },
    {
      company: 'Freelance',
      position: 'Web Developer & Consultant',
      period: 'Mar 2023 - Apr 2025',
      year: '2023',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      description: 'Built and maintained web applications for clients using modern technologies. Focused on creating responsive, accessible, and performant solutions.',
      skills: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Git'],
      icon: CodeBracketIcon
    },
    {
      company: 'Artlogic',
      position: 'Full Stack Developer',
      period: 'Apr 2025 - Present',
      year: '2025',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      description: 'Working with art galleries worldwide to provide digital solutions for art sales and gallery management.',
      skills: ['JavaScript', 'Python', 'SQL', 'AWS', 'API Development'],
      icon: BriefcaseIcon
    }
  ].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <section id="experience" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Work Experience</h2>
      
      <div className="relative">
        <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
        
        <div className="flex justify-between relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col items-center w-48">
              <div 
                className="relative z-10 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-16 h-16 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center text-white hover:bg-green-600 dark:hover:bg-green-700 transition-colors">
                  <exp.icon className="h-8 w-8" />
                </div>
                
                <p className="text-sm font-medium text-center mt-2 text-gray-700 dark:text-gray-300">{exp.year}</p>
                
                {hoveredIndex === index && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{exp.company}</h3>
                      <div>
                        <p className="text-green-600 dark:text-green-400 text-sm font-medium">{exp.position}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{exp.period}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{exp.location} · {exp.type}</p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ExperienceTimeline;
