"use client"
import Image from 'next/image';
import React from 'react'
const CTASection = () => {
    return (
      <section className="py-10 mt-16 p-6 w-[90vw] h-[16rem] flex flex-col items-start justify-start bg-blue-300 shadow-md rounded-3xl text-left ml-[4rem]" >
        <h2 className="text-3xl font-bold mb-3">Let’s make things happen</h2>
        <p className="text-lg text-gray-600 mb-4 w-96">
            Contact us today to learn more about our digital marketing services and how we can help you grow your business online.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Get your free proposal
        </button>
        <section className='w-full relative'>
        <Image
          src="/1.png"
          alt="Decorative"
          width={300}
          height={300}
          className="absolute -right-32  -top-[70px] -translate-y-48 mx-44"
          />
          </section>
      </section>
    );
  };
  
  export default CTASection;
  