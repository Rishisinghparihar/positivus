"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <footer className="bg-black text-white py-8 rounded-t-3xl  lg:w-[80rem] mx-auto my-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between  md:items-center md:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 ml-6">
              <div
                className="w-10 h-10 bg-white rotate-45"
                style={{
                  clipPath:
                    "polygon(50% 0, 65% 40%, 100% 50%, 65% 60%, 50% 100%, 35% 60%, 0 50%, 35% 40%)",
                }}
              ></div>
              <span className="font-bold text-xl">Positivus</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center items-end gap-8 md:gap-40 lg:px-10">
              {/* <ul className="flex flex-col md:flex-row gap-8 lg:mr-32"> */}
              <ul className="grid grid-cols-2 lg:grid-cols-6  gap-4 sm:gap-4 md:gap-8 text-center lg:place-items-center ">
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
                <li>
                  <Link href="#" className="underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="underline">
                    Pricing
                  </Link>
                </li>
              </ul>
              <div className="flex gap-3 ">
                {/* Icons (If needed) */}
                <span className="rounded-full grid place-items-center bg-white h-7 w-7 overflow-hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="black"
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    />
                  </svg>
                </span>
                <span className="rounded-full grid place-items-center bg-white h-7 w-7 overflow-hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="black"
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    />
                  </svg>
                </span>
                <span className="rounded-full bg-white h-7 w-7 overflow-hidden grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="black"
                      d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-10 pb-12 border-b-[1px] border-b-white px-6">
            {/* Contact Us Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-[#b9ff66] text-black font-semibold text-sm w-24 p-2 rounded">
                Contact-us:
              </div>
              <p className="mt-2">Email: info@positivus.com</p>
              <p>Phone: xxxxx-xxxxx</p>
              <p>Address: street no., area location</p>
            </div>

            {/* Email Subscription Section */}
            <div className="flex flex-col md:flex-row lg:gap-5 gap-[13px] p-[13px] bg-gray-800 justify-center items-center rounded-xl h-[9rem] sm:w-[90%] md:w-[30rem] mt-6 md:mt-0">
              <input
                type="email"
                className="w-full md:w-48 h-[3.4rem] border p-4 border-gray-300 bg-gray-800 rounded-2xl"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white p-4 rounded-2xl w-full md:w-48"
              >
                Subscribe to news
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-8 items-start justify-start px-6">
            <p className="text-start text-gray-400">
              © 2025 Positivus. All rights reserved.
            </p>
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
