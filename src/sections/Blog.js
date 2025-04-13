import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "Building a Modern Portfolio with React",
      excerpt: "A deep dive into creating a responsive portfolio website...",
      date: "2025-03-13",
      link: "#",
    },
    // Add more blog posts
  ];

  return (
    <section id="blog" className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          Technical Blog
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 dark:text-gray-400">
          Sharing my thoughts and experiences in software development
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 dark:bg-gray-800 bg-opacity-100 dark:bg-opacity-40 p-8 rounded border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-medium title-font mb-2 text-gray-900 dark:text-white">{post.title}</h2>
              <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{post.date}</p>
              <a href={post.link} className="text-indigo-500 dark:text-indigo-400 inline-flex items-center mt-3 hover:text-indigo-700 dark:hover:text-indigo-300">
                Read More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
