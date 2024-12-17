import React from 'react'

const page = async() => {
  
    const res=await fetch("http://localhost:3000/api")
    const news=await res.json();
    // console.log(news)
  
}

export default page