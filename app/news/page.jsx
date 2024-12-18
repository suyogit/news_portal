import React from "react";
import Trending from "../components/Trending";
import Comments from "../components/Comments";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/");
  const news = await res.json();
  return (
    <div className="flex flex-col ">
      <img src="" alt="" />
      <div>
        content here
      </div>
      <Comments/>
    </div>
  );
};

export default page;
