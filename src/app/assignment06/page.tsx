"use client";
import { useState } from "react";
// import { FiMenu, FiX } from "react-icons";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-500 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Assignment 06</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-white-200">
            Home
          </a>
          <a href="#about" className="hover:text-white-200">
            About
          </a>
          <a href="#services" className="hover:text-white-200">
            Services
          </a>
          <a href="#contact" className="hover:text-white-200">
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-500 space-y-2 py-4 text-center">
          <a href="#home" className="block hover:bg-slate-800 py-2">
            Home
          </a>
          <a href="#about" className="block hover:bg-slate-800 py-2">
            About
          </a>
          <a href="#services" className="block hover:bg-slate-800 py-2">
            Services
          </a>
          <a href="#contact" className="block hover:bg-slate-800 py-2">
            Contact
          </a>
        </div>
      )}

      <div className="hidden md:grid md:grid-cols-1 lg:flex lg:justify-between lg:items-center bg-slate-300">
        <div className="w-full py-3 text-center font-medium text-white">
          Full-Width Div
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-1/2 bg-slate-200 py-3 text-center text-white">
            Half-Width Div 1
          </div>
          <div className="w-1/2 bg-slate-300 py-3 text-center text-white">
            Half-Width Div 2
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Home;
