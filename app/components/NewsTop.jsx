import React from "react";

const NewsTop = ({ data }) => {
  const articles = data.slice(1, 5); // Skip the first article

  return (
    <div className="max-w-[1140px] mx-auto p-4 bg-white my-6">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Latest News
      </h2>

      {/* Articles Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white"
          >
            {/* Image */}
            <div className="h-40 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={article.urlToImage || "https://via.placeholder.com/150"}
                alt={article.title || "News Image"}
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-900 truncate">
                {article.title || "No title available"}
              </h3>
              <p className="text-gray-700 text-sm leading-snug line-clamp-3">
                {article.description || "Description not available."}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTop;
