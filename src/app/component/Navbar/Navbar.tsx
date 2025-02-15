"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-white/90 shadow-md z-50">
      <div className="flex max-w-[90%] mx-auto w-full items-center justify-between h-full">
        {/* Logo */}
        <h1 className="mon-bolder text-3xl text-gray-900 z-50">BLOGISTAN</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {["home", "Blog", "categories", "About"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item === "home" ? "" : item}`} className="group">
                <h3 className="mon-semibold text-base text-gray-700 active:text-yellow-500 group-hover:text-black uppercase">
                  {item}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 text-3xl focus:outline-none p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <Link href="/write" className="bg-blue-600 text-white px-4 py-2 rounded">Write Blog</Link>
      </div>

      {/* Mobile Menu & Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-screen w-2/3 bg-white shadow-lg md:hidden transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 p-6">
          {["home", "blog", "categories", "about"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item === "home" ? "" : item}`}
                className="text-gray-700 text-lg font-medium hover:text-yellow-500 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
