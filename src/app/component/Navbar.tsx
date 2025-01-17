"use client"
import React from 'react'
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md ">
      <div className="text-2xl pl-10 font-bold">Positivus</div>
      <div className="flex space-x-8"> 
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-green-500">About-us</a></li>
          <li><a href="#" className="hover:text-green-500">Services</a></li>
          <li><a href="#" className="hover:text-green-500">Use Cases</a></li>
          <li><a href="#" className="hover:text-green-500">Pricing</a></li>
          <li><a href="#" className="hover:text-green-500">Blog</a></li>
        </ul>
        <button className="border text-black font-thin px-4 py-2 rounded-md">Request a quote</button> 
      </div>
    </nav>
  );
};

export default Navbar;