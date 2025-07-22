"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const mobileNavVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-6 border-b border-gray-300 h-16">
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
          {/* Mobile Menu Button (only on small screens) */}

          <div className="hidden md:flex items-center h-full border-r border-gray-300 pr-4">
            <FiSearch className="cursor-pointer" />
          </div>
          <div className="hidden md:flex items-center h-full border-r border-gray-300 pr-4">
            <FiHeart className="cursor-pointer" />
          </div>
          <div className="flex items-center h-full border-r border-gray-300 pr-4">
            <FiShoppingBag className="cursor-pointer" />
          </div>

          <div className="md:hidden flex items-center h-full border-r border-gray-300 pr-5">
            <FiMenu
              className="cursor-pointer text-xl"
              onClick={toggleMobileNav}
            />
          </div>
        </div>
      </nav>

      {/* Bottom Promo Bar */}
      <div className="text-center text-sm py-2 bg-white text-gray-700 border-b border-gray-300">
        <span className="font-bold">Members</span> : Free Shipping on Orders
        $50+{" "}
        <div className="font-semibold underline cursor-pointer">Join now</div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={toggleMobileNav}
            />
            <motion.div
              className="fixed top-0 left-0 w-[70%] h-full bg-white z-50 shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileNavVariants}
              transition={{ type: "tween", ease: "easeInOut" }}
            >
              <div className="p-4 flex justify-end">
                <FiX
                  className="cursor-pointer text-xl"
                  onClick={toggleMobileNav}
                />
              </div>
              <ul className="flex flex-col gap-6 p-6 text-lg font-medium text-gray-800">
                <li className="hover:underline cursor-pointer">New arrivals</li>
                <li className="hover:underline cursor-pointer">Men</li>
                <li className="hover:underline cursor-pointer">Women</li>
                <li className="hover:underline cursor-pointer">Kids</li>
                <li className="hover:underline cursor-pointer">Collection</li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
