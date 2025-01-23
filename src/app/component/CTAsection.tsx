"use client"
import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <section className="py-10 mt-16 px-6 w-[90vw] max-w-7xl h-auto md:h-[16rem] flex flex-col md:flex-row items-start justify-start bg-gray-100 shadow-md rounded-3xl mx-auto">
      {/* Text Content */}
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Let’s make things happen
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4 max-w-md">
          Contact us today to learn more about our digital marketing services and how we can help you grow your business online.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Get your free proposal
        </button>
      </div>

      {/* Decorative Image */}
      <div className="relative lg:w-80 mt-6 md:mt-0 md:ml-6 flex-shrink-0">
        <Image
          src="/1.png"
          alt="Decorative"
          width={400}
          height={400}
          className=" mx-44 md:w-72 absolute lg:left-64 md:right-[-30px] top-[100px]  -translate-y-40"
        />
      </div>
    </section>
  );
};

export default CTASection;
