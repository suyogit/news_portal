"use client";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsTop from "./components/NewsTop";
import Footer from "./components/Footer"

import { useState, useEffect } from "react";

// https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=1ab7b5da78d9442ab0abe5ebdddaebc3&pageSize=100
export default function Home() {
   const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(
        "http://localhost:3000/api"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data)
          console.log(data.articles[0].urlToImage);
        });
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No news data</p>;
  
  return (
    <>
      <div className=" ">
        <Header />
        <Navbar />
        <div className="bg-[#E9E7E8]">
        <News data={data}/>
        <NewsTop data={data}/>
        <Footer/>
        </div>
      </div>
    </>
  );
}


