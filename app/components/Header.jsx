import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="max-w-[1140px] mx-auto
 "
    >
      <Image
        src="/logo.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-full max-w-[400px] p-6"
      />
    </div>
  );
};

export default Header;
