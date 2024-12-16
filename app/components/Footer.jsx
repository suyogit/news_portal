import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="mx-auto w-full ">
      <div className="flex justify-center gap-6 bg-[#0450A4] p-12 text-black font-bold flex-col md:flex-row">
        <div>
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="w-full max-w-[200px] p-6"
          />
        </div>
        <div>
          <div>chairman</div>
          <div>Tunaa Technology</div>
          <div>98000000000</div>
        </div>
        <div>
          <div>chairman</div>
          <div>Tunaa Technology</div>
          <div>98000000000</div>
        </div>
        <div>
          <div>Registration No.</div>
          <div>98000000000</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
