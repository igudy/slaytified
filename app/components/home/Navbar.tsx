import Image from "next/image";
import React from "react";
import { FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 border-b  border-gray-300 h-16">
        {/* Left - Logo */}
        <div className="flex items-center h-full border-r border-gray-300 px-4">
          <Image
            src="/logo.png"
            alt="Nike Logo"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Center - Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
          <li className="hover:underline cursor-pointer">New arrivals</li>
          <li className="hover:underline cursor-pointer">Men</li>
          <li className="hover:underline cursor-pointer">Women</li>
          <li className="hover:underline cursor-pointer">Kids</li>
          <li className="hover:underline cursor-pointer">Collection</li>
        </ul>

        {/* Right - Icons */}
        <div className="flex gap-4 text-xl h-full">
          <div className="flex items-center h-full border-r border-gray-300 pr-4">
            <FiSearch className="cursor-pointer" />
          </div>
          <div className="flex items-center h-full border-r border-gray-300 pr-4">
            <FiHeart className="cursor-pointer" />
          </div>
          <div className="flex items-center h-full border-r border-gray-300 pr-4">
            <FiShoppingBag className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Bottom Promo Bar */}
      <div className="text-center text-sm py-2 bg-white text-gray-700 border-b  border-gray-300">
        <span className="font-bold">Members</span> : Free Shipping on Orders
        $50+{" "}
        <div className="font-semibold underline cursor-pointer">Join now</div>
      </div>
    </div>
  );
};

export default Navbar;
