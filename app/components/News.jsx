"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const News = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-11-16&sortBy=publishedAt&apiKey=1ab7b5da78d9442ab0abe5ebdddaebc3"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data.articles[0].urlToImage);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No news data</p>;

  return (
    <div className="flex flex-col items-center bg-white z-10  my-2 max-w-[1140px] mx-auto">
      <h1 className="p-4">{data.articles[0].title}</h1>
      <img src={data.articles[0].urlToImage} alt=""  className="w-full max-w-[1000px]  " />
    </div>
  );
};
export default News;
