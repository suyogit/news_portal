"use client"
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mx-auto w-full bg-[#0450A4] text-white">
      {/* Top Navbar Container */}
      <div className="flex justify-between items-center p-4 md:hidden">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">Menu</div>
        
        {/* ☰ Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col gap-2 p-4 md:flex md:flex-row md:justify-center md:gap-6 md:p-2`}
      >
        <Link href="/hamro-page" className="hover:bg-[#0362C7] p-2 rounded">
          Hamro page
        </Link>
        <Link href="/sikshya" className="hover:bg-[#0362C7] p-2 rounded">
          Sikshya
        </Link>
        <Link href="/artha" className="hover:bg-[#0362C7] p-2 rounded">
          Artha
        </Link>
        <Link href="/rajniti" className="hover:bg-[#0362C7] p-2 rounded">
          Rajniti
        </Link>
        <Link href="/khelkud" className="hover:bg-[#0362C7] p-2 rounded">
          Khelkud
        </Link>
        <Link href="/swasthye" className="hover:bg-[#0362C7] p-2 rounded">
          Swasthye
        </Link>
        <Link href="/dharma" className="hover:bg-[#0362C7] p-2 rounded">
          Dharma
        </Link>
        <Link href="/manoranjan" className="hover:bg-[#0362C7] p-2 rounded">
          Manoranjan
        </Link>
        <Link href="/bichar" className="hover:bg-[#0362C7] p-2 rounded">
          Bichar
        </Link>
        <Link href="/krishi" className="hover:bg-[#0362C7] p-2 rounded">
          Krishi
        </Link>
        <Link href="/sampadika" className="hover:bg-[#0362C7] p-2 rounded">
          Sampadika
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
