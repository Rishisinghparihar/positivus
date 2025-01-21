"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <footer className="bg-black text-white py-8 rounded-t-3xl w-[80rem] ml-36 my-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between flex-wrap gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 ml-6">
              <div className="h-8 w-8 bg-lime-400 rounded-full"></div>
              <span className="font-bold text-xl">Positivus</span>
            </div>

            {/* Links */}
            <div className="flex gap-40">
              <ul className="flex mr-40 gap-8">
                <li>
                  <Link href="#" className="underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="underline">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="underline">
                    Pricing
                  </Link>
                </li>
              </ul>
              <span className="flex gap-3">
                {/* Icons */}
                {/* Icon implementation here */}
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-10 items-center gap-[29rem] pb-12 border-b-[1px] border-b-white">
            <div>
              <div className="bg-[#b9ff66] text-black font-semibold text-sm w-24 p-2 rounded">
                Contact-us:
              </div>
              <p>Email: info@positivus.com</p>
              <p>Phone: xxxxx-xxxxx</p>
              <p>Address: street no., area location</p>
            </div>

            <div className="flex gap-5 bg-gray-800 justify-center items-center rounded-xl h-32 w-[30rem]">
              <input
                type="email"
                className="w-48 h-[3.4rem] border p-4 border-gray-300 bg-gray-800 rounded-2xl"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white p-4 rounded-2xl w-48"
              >
                Subscribe to news
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <p className="text-start text-gray-400 mt-8">
              © 2025 Positivus. All rights reserved.
            </p>
            <Link href="#" className="underline mt-8">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;