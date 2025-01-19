"use client";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 rounded-t-3xl  w-[80rem] ml-36 my-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between flex-wrap gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 ml-6">
            <div className="h-8 w-8 bg-lime-400 rounded-full"></div>
            <span className="font-bold text-xl">Positivus</span>
          </div>

          {/* Links */}
          <div className="flex  gap-40">
            <ul className="flex mr-40 gap-8">
              <li>
                <a href="#" className="underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="flex gap-3 ">
              <span className="flex rounded-full items-center justify-center bg-white h-7 w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={20}
                  height={20}
                >
                  <path
                    fill=""
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </span>
              <span className="flex rounded-full items-center justify-center bg-white h-7 w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width={20}
                  height={20}
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
              <span className="flex rounded-full items-center justify-center bg-white h-7 w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={20}
                  height={20}
                >
                  <path
                    fill=""
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-10 items-center gap-[29rem] pb-12 border-b-[1px] border-b-white">
          <div className="">
            <div className="bg-[#b9ff66] text-black font-semibold text-sm w-24 p-2 rounded">
              Contact-us:
            </div>
            <p className="">Email:info@positivus.com</p>
            <p className="">Phone:xxxxx-xxxxx</p>
            <p className="">Address: street no., area location</p>
          </div>
          <div className="flex gap-5 bg-gray-800 justify-center items-center rounded-xl h-32 w-[30rem]">
            <div>
              <input
                type="text"
                className="w-48 h-[3.4rem] border p-4 border-gray-300 bg-gray-800 rounded-2xl"
                placeholder="Email"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white p-4 rounded-2xl w-48"
              >
                Subscribe to news
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <p className="text-start text-gray-400 mt-8">
            © 2025 Positivus. All rights reserved.
          </p>
          <a href="#" type="privacy policy" className="underline mt-8">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
