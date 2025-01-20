"use client"
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cards = () => {
  // Data for the cards
  const cardData = [
    {
      id: 1,
      title: "Search engine optimization",
      description: "Learn more",
      bgColor: "bg-gray-100",
      textColor: "text-green-600",
      image: "/90.png", // replace with your image path
    },
    {
      id: 2,
      title: "Pay-per-click advertising",
      description: "Learn more",
      // bgColor: "bg-green-200",
      bgColor: "bg-[#B9FF66]",
      textColor: "text-black",
      image: "/91.png", // replace with your image path
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Learn more",
      bgColor: "bg-black",
      textColor: "text-white",
      image: "/92.png", // replace with your image path
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Learn more",
      bgColor: "bg-gray-100",
      textColor: "text-green-600",
      image: "/93.png", // replace with your image path
    },
    {
      id: 5,
      title: "Content Creation",
      description: "Learn more",
      bgColor: "bg-[#B9FF66]",
      textColor: "text-black",
      image: "/94.png", // replace with your image path
    },
    {
      id: 6,
      title: "Analytics and Tracking",
      description: "Learn more",
      bgColor: "bg-black",
      textColor: "text-white",
      image: "/95.png" , // replace with your image path
    },
  ];

  return (
    <>
    <div className="pl-28 py-14 bg-white">
      <div className="flex items-center gap-4">
        <div className="bg-PRIMARY text-black font-semibold text-4xl p-1 rounded">
          Services
        </div>
        <p className="text-gray-700 text-xl w-[37rem]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-8 ">
      {cardData.map((card) => (
        <div key={card.id} className={`${card.bgColor} p-6 rounded-3xl shadow-lg w-[43rem] h-[19rem] flex justify-between border-[1.5px] border-b-[6px] border-gray-900`}>
        <div
          
          className="flex justify-between flex-col items-start"
        >
          {/* Title Section */}
          <h3
            className={`font-semibold text-2xl w-56 mb-4 inline-block px-2 py-1 rounded ${card.textColor} ` }
          >
            {card.title}
          </h3>

          {/* Image Section */}
          
          {/* <img
            src={card.image}
            alt={card.title}
            className=" h-40 object-contain mb-4 ml-[28rem] "
          /> */}

          {/* Learn More Section */}
          <a
            href="#"
            className={`flex items-center gap-2 text-black hover:text-green-600 font-medium ${card.bgColor==="bg-black" ?"text-white":''}`}
          >
            
            <span className="flex gap-3">
              <span className={`h-8 w-8 flex items-center justify-center ${card.bgColor==="bg-black" ?"bg-white text-black":'bg-black text-green-700'} rounded-full -rotate-[30deg]`}><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25}  viewBox="0 0 448 512"><path fill={`${card.bgColor==="bg-black" ?"black":'green'}`} d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
              <span className="my-1">{card.description}</span>
              </span>
            {/* <span className="text-green-600">&#8594;</span> */}
          </a>
        </div>
        <Image src={card.image}
          alt={card.title} 
          width={300}
          height={300}
          />
        </div>
      ))}
    </div>
  </>
  );
};

export default Cards;
