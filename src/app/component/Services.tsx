"use client";
import Image from "next/image";
import React from "react";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "Search engine optimization",
      description: "Learn more",
      bgColor: "bg-gray-100",
      textColor: "text-green-600",
      image: "/90.png",
    },
    {
      id: 2,
      title: "Pay-per-click advertising",
      description: "Learn more",
      bgColor: "bg-PRIMARY",
      textColor: "text-black",
      image: "/91.png",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Learn more",
      bgColor: "bg-black",
      textColor: "text-white",
      image: "/92.png",
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Learn more",
      bgColor: "bg-gray-100",
      textColor: "text-green-600",
      image: "/93.png",
    },
    {
      id: 5,
      title: "Content Creation",
      description: "Learn more",
      bgColor: "bg-PRIMARY",
      textColor: "text-black",
      image: "/94.png",
    },
    {
      id: 6,
      title: "Analytics and Tracking",
      description: "Learn more",
      bgColor: "bg-black",
      textColor: "text-white",
      image: "/95.png",
    },
  ];

  return (
    <>
      <div className="px-6 py-8 bg-white md:px-12 lg:pl-28 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
          <div className="bg-primary p-1 rounded mb-4 bg-PRIMARY text-black font-semibold text-4xl lg:mb-0">
            Services
          </div>
          <p className="text-gray-700 text-lg md:text-xl lg:w-[37rem]">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 p-8 md:p-12">
        {cardData.map((card,index) => (
          <div
            key={card.id}
            className={`${card.bgColor} p-12 rounded-3xl shadow-lg lg:w-[43rem] lg:h-[19rem] flex flex-col md:flex-row items-center justify-between border-[1.5px] border-b-[6px] border-gray-900`}
          >
            {/* Content */}
            <div className="flex justify-between flex-col items-start mb-4 md:mb-0 md:mr-6">
              <h3
                className={` text-black p-1 font-semibold text-2xl md:text-xl lg:w-56 inline-block px-2 py-1 rounded mb-[9rem] ${index===0||index===3||index===5? 'bg-PRIMARY':'bg-white'}`}
              >
                {card.title}
              </h3>
              <a
                href="#"
                className={`flex items-center gap-2 text-black hover:text-sky-900 font-medium ${
                  card.bgColor === "bg-black" ? "text-white" : ""
                }`}
              >
                <span className="flex gap-3">
                  <span
                    className={`h-8 w-8 flex items-center justify-center ${
                      card.bgColor === "bg-black"
                        ? "bg-white text-black"
                        : "bg-black text-PRIMARY"
                    } rounded-full -rotate-[30deg]`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill={`${
                          card.bgColor === "bg-black" ? "black" : "#B9FF66"
                        }`}
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </span>
                  <span className="my-1">{card.description}</span>
                </span>
              </a>
            </div>

            {/* Image */}
            <Image
              src={card.image}
              alt={card.title}
              width={150}
              height={150}
              className="w-full max-w-[150px] md:max-w-[200px] object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
