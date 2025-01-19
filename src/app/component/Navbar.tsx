"use client"
import React from 'react'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white  ">
      <div className="text-3xl pl-10 font-bold">Positivus</div>
      <div className="flex text-xl space-x-8"> 
        <ul className="flex space-x-6 mt-3">
          <li><a href="#" className="hover:text-gray-700">About-us</a></li>
          <li><a href="#" className="hover:text-gray-700">Services</a></li>
          <li><a href="#" className="hover:text-gray-700">Use Cases</a></li>
          <li><a href="#" className="hover:text-gray-700">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-700">Blog</a></li>
        </ul>
        <button className="border text-black font-thin px-4 py-2 rounded-md">Request a quote</button> 
      </div>
    </nav>
  );
};

export default Navbar;