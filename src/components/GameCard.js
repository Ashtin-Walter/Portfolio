import React from 'react';
import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function GameCard({ game }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative overflow-hidden pixel-card">
        <div className="pixel-bg h-48 w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-semibold">{game.title}</h3>
          <p className="text-sm">{game.subtitle}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {game.description}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={game.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 transition-colors"
          >
            Play <LinkIcon className="w-4 h-4 ml-1" />
          </a>
          {game.github && (
            <a
              href={game.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Code <CodeBracketIcon className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}