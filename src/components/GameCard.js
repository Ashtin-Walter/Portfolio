import React from 'react';
import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function GameCard({ game }) {
  return (
    <article 
      className="group relative flex flex-col overflow-hidden rounded-xl
        bg-gradient-to-br from-gray-900 to-black border border-purple-500/20
        shadow-md hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden pixel-card">
        {/* Base Pixel Grid */}
        <div className="pixel-bg h-48 w-full transition-all duration-500">
          {/* Game Image */}
          {game.image && (
            <img 
              src={game.image} 
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
          )}
        </div>
        
        {/* CRT Screen Effect */}
        <div className="crt-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
        
        {/* Scanlines */}
        <div className="scanlines absolute inset-0 pointer-events-none" aria-hidden="true" />
        
        {/* Pixel Animation Overlay */}
        <div className="absolute inset-0 z-10 pixel-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
          <div className="pixel-rain" />
          <div className="pixel-glitch" />
          <div className="pixel-scan-line" />
          <div className="pixel-noise" />
        </div>
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Title Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-purple-400 to-pink-300 group-hover:text-glow-purple mb-1 retro-text"
            >
              {game.title}
            </h3>
            <p className="text-sm text-purple-200/80 opacity-0 group-hover:opacity-100 
              transition-all duration-500 delay-100 retro-text-small"
            >
              {game.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col bg-black/80 backdrop-blur-sm">
        <p className="text-purple-100/90 text-sm mb-6 line-clamp-3 flex-grow retro-text-small">
          {game.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
          <a
            href={game.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button inline-flex items-center px-4 py-2 text-sm rounded-lg
              text-purple-100 transition-all duration-300"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            Play Demo
          </a>
          
          {game.github && (
            <a
              href={game.github}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button-secondary inline-flex items-center px-4 py-2 text-sm rounded-lg
                text-purple-300/80 hover:text-purple-200 transition-colors duration-300"
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