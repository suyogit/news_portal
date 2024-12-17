import React from "react";
import Category from "../components/Category";

const page = async () => {
  const res = await fetch("http://localhost:3000/api");
  const news = await res.json();
  // console.log(news)
  const trendingNews = news.filter((item) => item.tags?.includes("trending"));
  return (
    <div>
      {/* Render the Category component with filtered data */}
      <Category data={trendingNews} />
    </div>
  );
};

export default page;
