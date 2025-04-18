import React from 'react';
import { PowerIcon, PlayIcon } from "@heroicons/react/24/solid";
import { games } from "../data";

export default function ArcadePage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#0a0a0a_1px),_linear-gradient(90deg,_transparent_1px,_#0a0a0a_1px)] bg-[size:40px_40px] [background-position:center_center] opacity-20"></div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.2)_50%,_transparent_50%)] bg-[size:4px_4px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <PowerIcon className="w-16 h-16 mx-auto text-purple-500 animate-pulse mb-4" />
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wider font-['Press_Start_2P',_monospace]">
            ARCADE
          </h1>
          <p className="text-lg text-purple-300 font-mono">
            INSERT COIN TO CONTINUE...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="group relative perspective"
            >
              {/* Game Cartridge Card */}
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-[-15deg] preserve-3d">
                {/* Reflection effect - moved inside card container and below content */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-xl overflow-hidden border-t-4 border-purple-500 relative z-10">
                  {/* Cartridge top ridges */}
                  <div className="flex justify-between px-2 py-1 bg-gray-900">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-4 h-1 bg-gray-700 rounded-full"></div>
                    ))}
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2 font-mono">{game.title}</h2>
                    <p className="text-purple-300 mb-4 font-mono text-sm">{game.description}</p>
                    
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.skills?.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-4 relative z-20">
                      {game.demo && (
                        <a
                          href={game.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/button inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-mono cursor-pointer
                                     hover:bg-purple-700 active:bg-purple-800 transition-all duration-300 
                                     shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 
                                     hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                        >
                          <PlayIcon className="w-5 h-5 mr-2 transition-transform group-hover/button:scale-110" />
                          PLAY NOW
                        </a>
                      )}
                      
                      {game.github && (
                        <a
                          href={game.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/button inline-flex items-center px-6 py-3 bg-gray-700 text-purple-300 rounded-lg font-mono cursor-pointer
                                     hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                        >
                          <i className="fa-brands fa-github text-lg mr-2"></i>
                          CODE
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Cartridge connector pins */}
                  <div className="flex justify-between px-4 py-2 bg-gray-900">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-2 h-4 bg-gray-600 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom message with animated ellipsis */}
        <div className="text-center mt-16 text-purple-400 font-mono">
          <p>
            More games coming soon
            <span className="inline-block animate-ellipsis-1">.</span>
            <span className="inline-block animate-ellipsis-2">.</span>
            <span className="inline-block animate-ellipsis-3">.</span>
          </p>
        </div>
      </div>
    </div>
  );
}