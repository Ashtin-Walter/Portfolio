import React from 'react';
import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function GameCard({ game }) {
  return (
    <article 
      className="group relative flex flex-col overflow-hidden rounded-xl
        bg-gradient-to-br from-gray-900 to-black border border-purple-500/20
        shadow-md hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        {/* Game Image */}
        {game.image && (
          <img 
            src={game.image} 
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Line Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        
        {/* Title Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <div className="transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-purple-400 to-pink-300 mb-1"
            >
              {game.title}
            </h3>
            <p className="text-sm text-purple-200/80 opacity-0 group-hover:opacity-100 
              transition-all duration-300 delay-75"
            >
              {game.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col bg-black/80">
        <p className="text-purple-100/90 text-sm mb-6 line-clamp-3 flex-grow">
          {game.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
          <a
            href={game.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm rounded-lg
              bg-purple-600 hover:bg-purple-500 text-white transition-colors duration-200"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            Play Demo
          </a>
          
          {game.github && (
            <a
              href={game.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm rounded-lg
                border border-purple-500/50 text-purple-300 hover:text-purple-200 hover:border-purple-400 transition-colors duration-200"
            >
              <CodeBracketIcon className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}