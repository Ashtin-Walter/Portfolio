import { useState } from "react";
import { UserIcon, AcademicCapIcon, CodeBracketIcon, CogIcon } from "@heroicons/react/24/solid";

export default function About() {
    const [activeTab, setActiveTab] = useState("stats");

    return (
        <section id="about" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <UserIcon className="w-12 mx-auto text-green-400 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        About Me
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I am a dedicated and passionate Freelance Web Developer currently pursuing a Bachelor's degree in Computer Science. I thrive on collaborating with others to tackle challenges and deliver solutions.
                    </p>
                </div>

                <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {/* Dropdown for mobile */}
                    <div className="sm:hidden">
                        <select
                            id="tabs"
                            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            onChange={(e) => setActiveTab(e.target.value)}
                            value={activeTab}
                        >
                            <option value="stats">Statistics</option>
                            <option value="certs">Certifications</option>
                            <option value="education">Education</option>
                        </select>
                    </div>

                    {/* Tabs for larger screens */}
                    <ul className="hidden sm:flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg dark:divide-gray-600 dark:text-gray-400">
                        {["stats", "certs", "education"].map((tab) => (
                            <li key={tab} className="w-full">
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`inline-block w-full p-4 ${
                                        activeTab === tab
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                                    }`}
                                >
                                    {tab === "stats" ? "Statistics" : tab === "certs" ? "Certifications" : "Education"}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Tab content */}
                    <div className="border-t border-gray-200 dark:border-gray-600">
                        {activeTab === "stats" && (
                            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Statistics</h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                        <div className="flex flex-col items-center justify-center">
                                            <dt className="mb-2 text-3xl font-extrabold">2020</dt>
                                            <dd className="text-gray-500 dark:text-gray-400">Coding Since</dd>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <dt className="mb-2 text-3xl font-extrabold">10+</dt>
                                            <dd className="text-gray-500 dark:text-gray-400">Repositories Published</dd>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <dt className="mb-2 text-3xl font-extrabold">111%</dt>
                                            <dd className="text-gray-500 dark:text-gray-400">Effort Given</dd>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <dt className="mb-2 text-3xl font-extrabold">500K+</dt>
                                            <dd className="text-gray-500 dark:text-gray-400">Lines Of Code Written</dd>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <dt className="mb-2 text-3xl font-extrabold">1000+</dt>
                                            <dd className="text-gray-500 dark:text-gray-400">Cups Of Coffee</dd>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <dt className="mb-2 text-3xl font-extrabold">?</dt>
                                            <dd className="text-gray-500 dark:text-gray-400">Time Spent Coding For You</dd>
                                        </div>
                                    </dl>
                                </p>
                            </div>
                        )}
                        {activeTab === "certs" && (
                            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
                                <div className="flex flex-wrap justify-center gap-8 text-center">
                                    <a href="https://www.freecodecamp.org/certification/AshtinJW/responsive-web-design">
                                        <div className="flex flex-col items-center space-y-2">
                                            <AcademicCapIcon className="w-12 h-12 text-blue-500" />
                                            <p className="text-lg font-semibold">Responsive Web Design</p>
                                        </div>
                                    </a>
                                    <a href="https://www.freecodecamp.org/certification/AshtinJW/javascript-algorithms-and-data-structures">
                                        <div className="flex flex-col items-center space-y-2">
                                            <CodeBracketIcon className="w-12 h-12 text-green-500" />
                                            <p className="text-lg font-semibold">JavaScript Algorithms and Data Structures</p>
                                        </div>
                                    </a>
                                    <div className="flex flex-col items-center space-y-2">
                                        <CogIcon className="w-12 h-12 text-gray-500 animate-spin" />
                                        <p className="text-lg font-semibold">More in progress</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "education" && (
                            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
                                <div className="flex flex-wrap justify-center gap-8 text-center">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                                            <img 
                                                src="images/uopeople-logo.jpg"
                                                alt="University of the People Logo" 
                                                width={64} 
                                                height={64} 
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-lg font-semibold">Bachelor of Computer Science</p>
                                        <p className="text-sm text-gray-500 italic">(In Progress)</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
