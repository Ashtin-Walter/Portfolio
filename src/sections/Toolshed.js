// filepath: d:\Walter House\Web Dev\GitHub\Portfolio 2.0\src\sections\Toolshed.js
import { WrenchScrewdriverIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useMemo } from "react";
import { tools } from "../data";

export default function Toolshed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredTools = useMemo(() => {
    let result = tools;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(tool => 
        tool.title.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        (tool.skills || []).some(skill => 
          typeof skill === 'string' && skill.toLowerCase().includes(q)
        )
      );
    }
    if (categoryFilter !== 'all') {
      result = result.filter(tool => tool.category === categoryFilter);
    }
    return result;
  }, [searchQuery, categoryFilter]);

  // Get the counts of tools by category
  const categoryCounts = useMemo(() => {
    const counts = {};
    tools.forEach(tool => {
      const category = tool.category || "other";
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="toolshed" className="body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow">
            <WrenchScrewdriverIcon className="mx-auto w-10 mb-4 text-amber-600 dark:text-amber-500" />
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white">
            The Toolshed
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A collection of practical utilities and tools I've crafted to help solve everyday problems.
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">{tools.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Tools</div>
            </div>
            
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="text-center">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-500">{count}</div>
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
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="mt-4">
            <a
              href="https://tools.walterhouse.co.za"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
            >
              Visit The Toolshed
              <WrenchScrewdriverIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-150 ease-in-out"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 dark:text-gray-400">No tools found matching your search</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ToolCard component for displaying each tool
function ToolCard({ tool }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      {/* Top section with interactive rustic effect */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
        {/* Rustic wood grain texture that becomes more visible on hover */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MjBIMFYwem0wIDQwaDEwMHYyMEgwVjQwem0wIDQwaDEwMHYyMEgwVjgweiIgZmlsbD0iIzk5NzU1NSIgZmlsbC1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=')"
          }}
        ></div>
        
        {/* Animated nail effect in corners - appears on hover */}
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-amber-800/80 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-md"></div>
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-amber-800/80 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-md"></div>
        <div className="absolute bottom-14 left-2 w-3 h-3 rounded-full bg-amber-800/80 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-md"></div>
        <div className="absolute bottom-14 right-2 w-3 h-3 rounded-full bg-amber-800/80 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-md"></div>
        
        {/* Icon or Image with rustic glow effect on hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          {tool.image ? (
            <img 
              src={tool.image} 
              alt={tool.title} 
              className="w-16 h-16 object-contain filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 z-10"
            />
          ) : (
            <WrenchScrewdriverIcon className="w-16 h-16 text-amber-600 dark:text-amber-500 drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 group-hover:text-amber-700 dark:group-hover:text-amber-400 z-10" />
          )}
        </div>
        
        {/* Title Bar with rustic wood appearance */}
        <div className="absolute bottom-0 left-0 right-0 bg-amber-800/80 dark:bg-amber-900/80 text-white p-3 border-t-2 border-amber-600/30 shadow-inner transform group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold truncate">{tool.title}</h3>
          <p className="text-sm text-amber-100 dark:text-amber-200">{tool.subtitle}</p>
        </div>
      </div>

      {/* Content Section with subtle wood grain texture */}
      <div className="flex-1 p-4 flex flex-col justify-between relative">
        {/* Subtle wood grain background that shows on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MjBIMFYwem0wIDQwaDEwMHYyMEgwVjQwem0wIDQwaDEwMHYyMEgwVjgweiIgZmlsbD0iIzk5NzU1NSIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3N2Zz4=')"
          }}
        ></div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3 relative z-10">
          {tool.description}
        </p>
        
        {/* Technology Pills/Tags */}
        {tool.skills && (
          <div className="mb-4 flex flex-wrap gap-2 relative z-10">
            {tool.skills.map((skill, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {/* Action Links */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-amber-200 dark:border-amber-800/30 relative z-10">
          <a
            href={tool.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-amber-600 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            Use Tool
          </a>
          {tool.github && (
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}