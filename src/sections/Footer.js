import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto px-5 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 Ashtin Walter. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/AshtinJW-Dev" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ashtin-walter-b60709250/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
