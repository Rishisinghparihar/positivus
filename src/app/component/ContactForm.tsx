"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // pushTODB()
    return;
  };

  const [selectedOption, setSelectedOption] = useState("say-hi");

  return (
    <>
      {/* Header Section */}
      <div className="px-6 py-8 bg-white md:px-12 lg:pl-28 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
          <div className="p-1 rounded mb-4 bg-PRIMARY text-black font-semibold lg:text-4xl md:text-4xl  sm:text-3xl lg:mb-0">
            Contact-us
          </div>
          <p className="text-gray-700 text-lg md:text-xl lg:w-[22rem]">
            Connect with us. Let&apos;s discuss your digital marketing needs.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-100 lg:w-[80rem] mx-auto rounded-3xl">
        <div className="flex flex-col lg:items-center md:flex-row justify-between gap-6 px-6 md:px-12">
          {/* Radio Buttons */}
          <div className="flex flex-col  md:flex-row gap-6 lg:px-4 lg:ml-[6.5rem]">
            {/* First Radio Button */}
            <label className="flex  space-x-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                value="say-hi"
                checked={selectedOption === "say-hi"}
                onChange={() => setSelectedOption("say-hi")}
                className="peer hidden"
              />
              <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                <div
                  className={`w-3 h-3 bg-PRIMARY rounded-full ${
                    selectedOption === "say-hi" ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                ></div>
              </div>
              <span className="text-black">Say Hi</span>
            </label>

            {/* Second Radio Button */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                value="get-quote"
                checked={selectedOption === "get-quote"}
                onChange={() => setSelectedOption("get-quote")}
                className="peer hidden"
              />
              <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                <div
                  className={`w-3 h-3 bg-PRIMARY rounded-full ${
                    selectedOption === "get-quote" ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                ></div>
              </div>
              <span className="text-black">Get a Quote</span>
            </label>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:px-3 ">
          <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full border p-4 border-gray-300 rounded-2xl"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 p-4 rounded-2xl"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 p-4 rounded-2xl"
                placeholder="Enter your message"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md w-full"
            >
              Send Message
            </button>
          </form>
          {/* Image Section */}
          <div className="flex justify-center md:ml-[6rem]">
            <Image
              src="/img-1.png"
              alt="Decorative"
              width={300}
              height={300}
              className="lg:max-w-full lg:ml-[22.9rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
