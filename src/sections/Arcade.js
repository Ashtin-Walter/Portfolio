import { PowerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useMemo } from "react";
import { games } from "../data";
import GameCard from "../components/GameCard";

export default function Arcade() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState('all');

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

  // Get the counts of games by category
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
          <div className="animate-bounce-slow"><PowerIcon className="mx-auto w-10 mb-4 text-purple-500 dark:text-purple-400" /></div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white">
            The Arcade
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A collection of fun and interactive games I've developed. Take a break and play around!
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 dark:text-purple-400">{games.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Games</div>
            </div>
            
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="text-center">
                <div className="text-2xl font-bold text-purple-500 dark:text-purple-400">{count}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
              </div>
            ))}
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['all', ...Object.keys(categoryCounts)].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="mt-4">
            <a
              href="https://arcade.walterhouse.co.za"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
            >
              Enter The Arcade
              <PowerIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
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
              <GameCard key={game.id} game={game} />
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