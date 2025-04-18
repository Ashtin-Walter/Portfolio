import { PowerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState,  useMemo } from "react";
import { games } from "../data";

export default function Arcade() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredGames = useMemo(() => {
    if (!searchQuery.trim()) return games;
    
    const query = searchQuery.toLowerCase();
    return games.filter(game => 
      game.title.toLowerCase().includes(query) || 
      game.description.toLowerCase().includes(query) ||
      (game.skills && Array.isArray(game.skills) && 
        game.skills.some(skill => 
          typeof skill === 'string' && skill.toLowerCase().includes(query)
        ))
    );
  }, [searchQuery]);

  return (
    <section id="arcade" className="body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow"><PowerIcon className="mx-auto w-10 mb-4 text-purple-500 dark:text-purple-400" /></div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white">
            The Arcade
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A collection of fun and interactive games I've developed. Take a break and play around!
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <div 
                key={game.id}
                className="relative group block"
              >
                <div className="relative h-96 w-full overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-800 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-gray-900 transition-all duration-300 group-hover:border-purple-400">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-black/40 dark:bg-black/50 backdrop-blur-sm">
                    <span className="px-3 py-1 text-xs font-medium bg-purple-500 dark:bg-purple-400 text-white dark:text-gray-900 rounded-full mb-4">
                      {game.subtitle}
                    </span>
                    <h2 className="text-xl font-bold text-white mb-2">{game.title}</h2>
                    <p className="text-sm text-gray-200 dark:text-gray-300 text-center mb-4">{game.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {game.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-purple-700 dark:text-purple-400 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Game Links */}
                    <div className="flex gap-4 mt-4">
                      {game.demo && (
                        <a
                          href={game.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm bg-purple-500 dark:bg-purple-400 text-white dark:text-gray-900 rounded hover:bg-purple-600 dark:hover:bg-purple-500 transition-colors"
                        >
                          Play Now
                        </a>
                      )}
                      {game.github && (
                        <a
                          href={game.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-purple-400 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 dark:text-gray-400">No games found matching your search</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}