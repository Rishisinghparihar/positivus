"use client"
import Image from 'next/image';
import React from 'react'
const HeroSection = () => {
  return (
    <div className=" left-0 top-0 justify-end" >
      {/* <div className="flex justify-end"> */}
              {/* </div> */}
      <section className="flex flex-row-reverse text-left py-20 pl-10 ">
        <Image
        src="/2.png"
        alt="Decorative"
        width={600}
        height={550}
        className="max-w-full"
      />
      <div>
        <h1 className="text-7xl mb-4 font-light ">
          Navigating the digital landscape for success
        </h1>
        <p className="text-lg text-gray-600 mb-8 w-[26rem]">
          Our Digital Marketing Agency helps businesses grow and succeed online through a range of services including SEO, PPC, Social Media Marketing, and Content creation.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Book a Consultation
        </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;