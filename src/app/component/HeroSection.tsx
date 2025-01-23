"use client"
import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
  return (
    <div className="left-0 top-0 ">
      <section className="flex flex-col-reverse lg:flex-row-reverse  lg:text-left py-16 px-6 lg:py-20 pl-10 ">
        {/* Image Section */}
        <Image
          src="/2.png"
          alt="Decorative"
          width={600}
          height={550}
          className="w-full max-w-lg lg:max-w-xl"
        />

        {/* Text Section */}
        <div className="lg:mr-10 lg:w-1/2 ">
          <h1 className="text-4xl lg:text-7xl  font-light lg:mr-[5.5rem] mb-4 ">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg lg:text-lg text-gray-600 mb-8 lg:w-[26rem] mx-auto lg:mx-0">
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
