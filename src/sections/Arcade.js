import { PowerIcon, MagnifyingGlassIcon, XMarkIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import React, { useState, useMemo, useEffect } from "react";
import { games } from "../data";
import GameCard from "../components/GameCard";

export default function Arcade() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Scroll to top when filters change
  useEffect(() => {
    const arcadeSection = document.getElementById('arcade');
    if (arcadeSection) {
      arcadeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [categoryFilter]);

  const filteredGames = useMemo(() => {
    let result = games;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(q) ||
        game.description.toLowerCase().includes(q) ||
        (game.skills || []).some(skill => 
          typeof skill === 'string' && skill.toLowerCase().includes(q)
        )
      );
    }
    if (categoryFilter !== 'all') {
      result = result.filter(game => game.category === categoryFilter);
    }
    return result;
  }, [searchQuery, categoryFilter]);

  const categoryCounts = useMemo(() => {
    const counts = {};
    games.forEach(game => {
      const category = game.category || "other";
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="arcade" className="body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="relative animate-bounce-slow">
            <PowerIcon className="mx-auto w-12 h-12 text-purple-500 dark:text-purple-400 " />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl dark:from-purple-400/20" />
          </div>
          
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white mt-4">
            The Arcade
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A collection of fun and interactive games I've developed. Take a break and play around!
          </p>
          
          {/* Stats row with animations */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 mb-6">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {games.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Games</div>
            </div>
            
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div 
                key={category} 
                className="text-center transform hover:scale-105 transition-transform"
                onClick={() => setCategoryFilter(category)}
                role="button"
                tabIndex={0}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {count}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="relative max-w-2xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className={`h-5 w-5 transition-colors duration-200 ${
                    isSearchFocused ? 'text-purple-500' : 'text-gray-400'
                  }`} />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-10 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                           placeholder-gray-500 dark:placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition duration-200"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </button>
                )}
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  showFilters
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>

            {/* Category Filters */}
            <div className={`mt-4 transition-all duration-300 ${showFilters ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              <div className="flex flex-wrap justify-center gap-3">
                {['all', ...Object.keys(categoryCounts)].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                      categoryFilter === cat
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {cat === 'all' ? 'All Games' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enter Arcade Button */}
          <div className="mt-8">
            <a
              href="https://arcade.walterhouse.co.za"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white 
                       bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                       transform transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
            >
              Enter The Arcade
              <PowerIcon className="ml-2 -mr-1 h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Games Grid */}
        <div className="mt-12">
          {filteredGames.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No games found matching your search
              </p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setShowFilters(false);
                }}
                className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 
                         transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}