"use client";
import React from "react";
import ImageShape from "./ShapeImage";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John smith",
      role: "CEO and Founder",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/44.png",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/dekhna.png",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/50.png",
    },
    {
      name: "Emiley Johnson",
      role: "PPC Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "/46.png",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/47.png",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      image: "/51.png",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="px-4 py-8 bg-white sm:px-6 md:px-12 lg:pl-28 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
          <div className="lg:text-4xl sm:text-3xl md:text-4xl bg-PRIMARY text-black font-semibold rounded mb-4 lg:mb-0 p-2">
            Team
          </div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:w-[30rem]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 md:px-6 lg:px-20 lg:p-8 sm:px-6">
        {teamMembers.map((teamMember, index) => (
          <div
            key={index}
            className="h-auto w-full rounded-[1.5rem] border-[1px] shadow-md border-b-[4px] border-gray-900"
          >
            {/* Image and Title Section */}
            <div className="p-4 grid grid-cols-3 gap-4 justify-between border-b-[1.5px] w-full lg:w-[24rem] mx-auto border-black">
              <ImageShape src={teamMember.image} alt={teamMember.role} />
              <div className="col-span-2 flex flex-col justify-center">
                <h3 className="font-semibold text-md sm:text-lg mb-2">
                  {teamMember.name}
                </h3>
                <a
                  href="#"
                  className="text-black hover:text-gray-700 text-sm sm:text-base font-medium"
                >
                  {teamMember.role}
                </a>
              </div>
            </div>

            {/* Description Section */}
            <div className="px-4 py-4">
              <p className="text-sm sm:text-base text-gray-700 line-clamp-4">
                {teamMember.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-end py-4 lg:mr-[5rem]">
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          see all team
        </button>
      </div>
    </>
  );
};

export default TeamSection;
