import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mx-auto w-full">
      <div className="flex justify-center gap-6 bg-[#0450A4] p-12 text-black font-bold flex-col md:flex-row">
        <div>
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-full max-w-[100px] p-6"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>chairman</div>
          <div>Tunaa Technology</div>
          <div>98000000000</div>
        </div>
        <div className="flex flex-col justify-between">
          <div>chairman</div>
          <div>Tunaa Technology</div>
          <div>98000000000</div>
        </div>
        
          <div className="flex flex-col justify-between">
            <div> Registration No.</div>
            <div>98000000000</div>
            <div>email@gmail.com</div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
