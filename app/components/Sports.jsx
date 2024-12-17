import React from "react";

const Sports = ({ data }) => {
  const articles = data.slice(0, 8); // Fetch first 8 articles

  return (
    <div className="max-w-[1140px] mx-auto p-4 bg-white my-6">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Sports News
      </h2>

      {/* Articles Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            {/* Image */}
            <a
              href={article.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-40 object-cover"
                src={article.urlToImage || "https://via.placeholder.com/150"}
                alt={article.title || "News Image"}
              />
            </a>

            {/* Content */}
            <div className="p-5">
              <a
                href={article.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {article.title || "No title available"}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
