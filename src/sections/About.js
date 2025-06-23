import { useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { personalInfo, interests, certifications, developmentSetup, experience } from "../data";
import {
  UserIcon,
  StarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ClockIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  CpuChipIcon,
  BookOpenIcon,
  BeakerIcon,
  DevicePhoneMobileIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  CommandLineIcon,
  CloudIcon,
  ServerIcon,
  SwatchIcon,
  BoltIcon
} from "@heroicons/react/24/solid";
import AnimatedNumber from "../components/AnimatedNumber";

// Tab Content Components
function StatsTab({ stats, statsRef, isStatsInView }) {
  return (
    <div
      ref={statsRef}
      id="stats-panel"
      role="tabpanel"
      className="p-4 bg-white dark:bg-gray-800 rounded-lg md:p-8 transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <StarIcon className="w-6 h-6 text-green-400 animate-pulse" /> Statistics
      </h2>
      <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
        {stats.map((stat, index) => (
          <div key={index} 
            className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
          >
            <dt className="mb-2 text-3xl font-extrabold">
              {stat.value === "?" ? "?" : (
                <AnimatedNumber value={stat.value} start={isStatsInView} />
              )}
            </dt>
            <dd className="text-gray-500 dark:text-gray-400 text-center">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CertsTab() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <DocumentTextIcon className="w-6 h-6 text-blue-400" /> Certifications
      </h2>      <div className="flex flex-wrap justify-center gap-8 text-center text-gray-700 dark:text-gray-300 mt-6">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            className="group p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-3 rounded-lg ${cert.color} bg-gray-100 dark:bg-gray-800 transition-colors duration-300 group-hover:bg-white dark:group-hover:bg-gray-700`}>
                <cert.icon className="w-8 h-8" />
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</p>
            </div>
          </a>
        ))}
        <div className="p-4 group">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
              <CogIcon className="w-8 h-8 text-gray-500 dark:text-gray-400 animate-spin" />
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">More in progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationTab() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div id="education-panel" role="tabpanel" className="p-4 bg-white dark:bg-gray-800 rounded-lg md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-8">
        <AcademicCapIcon className="w-6 h-6 text-blue-400" /> Education
      </h2>
      <div className="flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300">
        <div 
          className="flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`w-24 h-24 relative rounded-xl overflow-hidden border-2 border-blue-300 dark:border-blue-600 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            <img
              src="/images/uopeople-logo.webp"
              alt="University of the People Logo" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Computer Science</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">University of the People</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-1">(In Progress - 2025)</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">              {personalInfo.education.courses.map((skill, i) => (
                <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineTab() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-8">
        <ClockIcon className="w-6 h-6 text-green-400" /> Experience Timeline
      </h2>
      
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative mb-8">
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
  );
}

function InterestsTab() {
  const categoryIcons = {
    'Technology': CpuChipIcon,
    'Learning': BookOpenIcon,
    'Creative': BeakerIcon,
    'Lifestyle': DevicePhoneMobileIcon
  };

  const categoryColors = {
    'Technology': 'text-blue-400',
    'Learning': 'text-green-400',
    'Creative': 'text-blue-500',
    'Lifestyle': 'text-green-500'
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-8">
        <HeartIcon className="w-6 h-6 text-blue-400" /> Interests & Hobbies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((category, idx) => {
          const Icon = categoryIcons[category.category] || CpuChipIcon;
          const color = categoryColors[category.category] || 'text-blue-400';
          
          return (
            <div key={idx} className="p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-8 h-8 ${color}`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span key={i} className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ToolsTab() {
  const iconMap = {
    'CommandLine': CommandLineIcon,
    'Cloud': CloudIcon,
    'Code': CodeBracketIcon,
    'Server': ServerIcon,
    'ColorSwatch': SwatchIcon,
    'Lightning': BoltIcon
  };

  const colorMap = {
    'Development Environment': 'text-purple-400',
    'Version Control & Deployment': 'text-blue-400',
    'Frontend Stack': 'text-green-400',
    'Backend & DevOps': 'text-red-400',
    'Design Tools': 'text-pink-400',
    'Productivity': 'text-yellow-400'
  };

  const bgColorMap = {
    'Development Environment': 'bg-purple-50 dark:bg-purple-900/20',
    'Version Control & Deployment': 'bg-blue-50 dark:bg-blue-900/20',
    'Frontend Stack': 'bg-green-50 dark:bg-green-900/20',
    'Backend & DevOps': 'bg-red-50 dark:bg-red-900/20',
    'Design Tools': 'bg-pink-50 dark:bg-pink-900/20',
    'Productivity': 'bg-yellow-50 dark:bg-yellow-900/20'
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-8">
        <WrenchScrewdriverIcon className="w-6 h-6 text-green-400" /> Tools & Setup
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {developmentSetup.map((category, idx) => {
          const Icon = iconMap[category.icon];
          const color = colorMap[category.category];
          const bgColor = bgColorMap[category.category];
          
          return (
            <div key={idx} className={`p-6 rounded-xl ${bgColor} transition-all duration-300 hover:shadow-lg`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${color} bg-white dark:bg-gray-800`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.items.map((tool, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition-all duration-200">
                    <span className="font-medium text-gray-900 dark:text-white mb-1 sm:mb-0">{tool.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("stats");
  const [statsRef, isStatsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const stats = useMemo(() => personalInfo.stats, []);

  // Tab configuration with icons and content
  const tabs = useMemo(() => [
    { id: "stats", label: "Statistics", icon: StarIcon, content: <StatsTab stats={stats} statsRef={statsRef} isStatsInView={isStatsInView} /> },
    { id: "certs", label: "Certifications", icon: DocumentTextIcon, content: <CertsTab /> },
    { id: "education", label: "Education", icon: AcademicCapIcon, content: <EducationTab /> },
    { id: "timeline", label: "Timeline", icon: ClockIcon, content: <TimelineTab /> },
    { id: "interests", label: "Interests", icon: HeartIcon, content: <InterestsTab /> },
    { id: "tools", label: "Tools & Setup", icon: WrenchScrewdriverIcon, content: <ToolsTab /> }
  ], [stats, statsRef, isStatsInView]);

  const activeTabObj = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="about" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="animate-bounce-slow">
            <UserIcon className="w-12 mx-auto text-green-500 dark:text-green-400 mb-4" />
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            I am a dedicated and passionate Freelance Web Developer currently pursuing a Bachelor's degree in Computer Science. I thrive on collaborating with others to tackle challenges and deliver solutions.
          </p>
        </div>

        <div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          {/* Dropdown for mobile */}
          <div className="sm:hidden">
            <select
              id="tabs"
              className="bg-gray-50 dark:bg-gray-700 border-0 border-b border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-t-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:placeholder-gray-400"
              onChange={e => setActiveTab(e.target.value)}
              value={activeTab}
              aria-label="Select tab"
            >
              {tabs.map(tab => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
            </select>
          </div>

          {/* Tabs for larger screens */}
          <ul className="hidden sm:flex text-sm font-medium text-center text-gray-500 dark:text-gray-400 divide-x divide-gray-200 dark:divide-gray-600 rounded-lg" role="tablist">
            {tabs.map(tab => (
              <li key={tab.id} className="w-full" role="presentation">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 w-full p-4 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab content */}
          <div className="border-t border-gray-200 dark:border-gray-600 min-h-[200px] animate-fade-in">
            {activeTabObj?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
