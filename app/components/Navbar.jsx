import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mx-auto w-full">
      <div className="flex justify-center gap-6 bg-[#0450A4] p-2 text-white">
        <Link href="/hamro-page">
          <div className="hover:bg-[#0362C7] p-2 rounded">Hamro page</div>
        </Link>
        <Link href="/sikshya">
          <div className="hover:bg-[#0362C7] p-2 rounded">Sikshya</div>
        </Link>
        <Link href="/artha">
          <div className="hover:bg-[#0362C7] p-2 rounded">Artha</div>
        </Link>
        <Link href="/rajniti">
          <div className="hover:bg-[#0362C7] p-2 rounded">Rajniti</div>
        </Link>
        <Link href="/khelkud">
          <div className="hover:bg-[#0362C7] p-2 rounded">Khelkud</div>
        </Link>
        <Link href="/swasthye">
          <div className="hover:bg-[#0362C7] p-2 rounded">Swasthye</div>
        </Link>
        <Link href="/dharma">
          <div className="hover:bg-[#0362C7] p-2 rounded">Dharma</div>
        </Link>
        <Link href="/manoranjan">
          <div className="hover:bg-[#0362C7] p-2 rounded">Manoranjan</div>
        </Link>
        <Link href="/bichar">
          <div className="hover:bg-[#0362C7] p-2 rounded">Bichar</div>
        </Link>
        <Link href="/krishi">
          <div className="hover:bg-[#0362C7] p-2 rounded">Krishi</div>
        </Link>
        <Link href="/sampadika">
          <div className="hover:bg-[#0362C7] p-2 rounded">Sampadika</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
