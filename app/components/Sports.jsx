const Sports = ({ data }) => {
    const article = data;
    return (
      <div className="max-w-[1140px] mx-auto p-4 bg-white my-6">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Sports News
        </h2>
  
        {/* Articles Section */}
        <div className="flex flex-wrap gap-8 justify-center">
          {article.map((article, index) => (
            <div
              key={index}
              className="max-w-56 bg-white border border-gray-200 rounded-lg shadow transform transition-transform hover:scale-105"
            >
              <a
                href={article.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="rounded-t-lg"
                  src={article.urlToImage || "https://via.placeholder.com/150"}
                  alt={article.title || "News Image"}
                />
              </a>
              <div className="p-5 bg-white">
                <a
                  href={article.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {article.title || "No title available"}
                    {article.tags}
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
  