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
    <div className="pl-28 py-14 bg-white">
    <div className="flex items-center gap-4">
      <div className="bg-[#b9ff66] text-black font-semibold text-4xl p-1 rounded">
        Contact-us
      </div>
      <p className="text-gray-700 text-xl w-[20rem]">
        Connect with us. lets discuss your digital marketing needs.
      </p>
    </div>
  </div>
  <div className="py-16 bg-gray-100 w-[80rem] rounded-3xl ml-36">
   <div className="flex items-center ml-[9.5rem] space-x-6">
      {/* First Radio Button */}
      <label className="flex items-center space-x-2 cursor-pointer">
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
            className={`w-3 h-3 bg-lime-400 rounded-full ${
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
            className={`w-3 h-3 bg-lime-400 rounded-full ${
              selectedOption === "get-quote" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          ></div>
        </div>
        <span className="text-black">Get a Quote</span>
      </label>
    </div>
      {/* <h2 className="text-center text-3xl font-bold mb-12">Contact Us</h2> */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 "
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full border p-4 border-gray-300 rounded-2xl"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-4 rounded-2xl"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
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
        <div className="flex justify-center">
          <Image
            src="/img-1.png"
            alt="Decorative"
            width={300}
            height={300}
            className="max-w-full ml-[28.1rem]"
          />
        </div>
      </div>
    </div>
    </>);
};

export default ContactForm;
