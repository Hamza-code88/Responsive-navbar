'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
 
      <nav className="w-full h-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black backdrop-blur-lg text-white flex justify-between items-center px-4 md:px-8 shadow-lg border-b border-white/20">
        
        <div className="w-1/3 md:w-2/12">
          <h1 className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg">
            Logo
          </h1>
        </div>

       
        <div className="hidden md:flex md:w-8/12 justify-around">
          <Link
            className="mx-2 text-lg hover:text-pink-400 transition-transform transform hover:scale-105 hover:rotate-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 text-lg hover:text-purple-400 transition-transform transform hover:scale-105 hover:-rotate-1"
            href="/about"
          >
            About
          </Link>
          <Link
            className="mx-2 text-lg hover:text-blue-400 transition-transform transform hover:scale-105 hover:rotate-2"
            href="/contact"
          >
            Contact us
          </Link>
          <Link
            className="mx-2 text-lg hover:text-green-400 transition-transform transform hover:scale-105 hover:-rotate-2"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="mx-2 text-lg hover:text-yellow-400 transition-transform transform hover:scale-105 hover:rotate-3"
            href="/projects"
          >
            Projects
          </Link>
        </div>

       
        <div className="md:hidden">
          <button
            className="text-3xl text-pink-400 focus:outline-none transform transition-transform hover:scale-125"
            onClick={toggleMenu}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

  
      {isOpen && (
        <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white flex flex-col items-center md:hidden py-6 shadow-xl rounded-lg m-4">
          <Link
            className="py-3 text-lg hover:bg-white/20 w-11/12 text-center rounded-lg transition-all duration-300 ease-in-out"
            href="/"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            className="py-3 text-lg hover:bg-white/20 w-11/12 text-center rounded-lg transition-all duration-300 ease-in-out"
            href="/about"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="py-3 text-lg hover:bg-white/20 w-11/12 text-center rounded-lg transition-all duration-300 ease-in-out"
            href="/contact"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
          <Link
            className="py-3 text-lg hover:bg-white/20 w-11/12 text-center rounded-lg transition-all duration-300 ease-in-out"
            href="/services"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            className="py-3 text-lg hover:bg-white/20 w-11/12 text-center rounded-lg transition-all duration-300 ease-in-out"
            href="/projects"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
