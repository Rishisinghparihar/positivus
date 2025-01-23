"use client"
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white md:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <div
          className="w-10 h-10 bg-black rotate-45"
          style={{
            clipPath: "polygon(50% 0, 65% 40%, 100% 50%, 65% 60%, 50% 100%, 35% 60%, 0 50%, 35% 40%)",
          }}
        ></div>
        <div className="text-4xl pl-4 font-semibold">Positivus</div>
      </div>

      {/* Menu */}
      <div className="hidden md:flex text-xl space-x-8 items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-700">
              About-us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Use Cases
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Blog
            </a>
          </li>
        </ul>
        <button type="button"className="border text-black font-thin px-4 py-2 rounded-md">
          Request a quote
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button type="button" className="text-3xl" title="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
