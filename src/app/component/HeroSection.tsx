"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="left-0 top-0">
      <section className="flex flex-col-reverse lg:flex-row-reverse lg:text-left sm:py-10 px-4 sm:px-6 lg:py-20 pl-10">
        {/* Image Section */}
        <Image
          src="/2.png"
          alt="Decorative"
          width={600}
          height={550}
          className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto"
        />

        {/* Text Section */}
        <div className="lg:mr-10 lg:w-1/2 sm:text-center md:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-light mb-4 lg:mr-[6rem]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg lg:text-lg 

           sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-full sm:max-w-md lg:w-[26rem] mx-auto lg:mx-0">
            Our Digital Marketing Agency helps businesses grow and succeed online through a range of services including SEO, PPC, Social Media Marketing, and Content creation.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
