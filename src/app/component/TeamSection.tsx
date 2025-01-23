"use client";
import React from "react";
import ImageShape from "./ShapeImage";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "SEO Expert",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: "/44.png",
    },
    {
      name: "Jane Smith",
      role: "PPC Specialist",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/dekhna.png",
    },
    {
      name: "Michael Brown",
      role: "Social Media Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/50.png",
    },
    {
      name: "Michael Brown",
      role: "Social Media Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/46.png",
    },
    {
      name: "Michael Brown",
      role: "Social Media Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/47.png",
    },
    {
      name: "Michael Brown",
      role: "Social Media Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/51.png",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="pl-6 md:pl-12 lg:pl-28 py-14 bg-white">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="bg-PRIMARY text-black font-semibold md:text-3xl lg:text-4xl p-1 rounded">
            Team
          </div>
          <p className="text-gray-700 md:text-lg lg:text-xl capitalize max-w-full md:max-w-lg">
            Meet the skilled and experienced team behind our successful digital marketing strategies.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 md:px-6 lg:px-20 lg:p-8">
        {teamMembers.map((teamMember, index) => (
          <div
            key={index}
            className="h-auto lg:h-72 w-full lg:w-[28rem] rounded-[2.5rem] border-[1.5px] shadow-xl border-b-[6px] border-gray-900"
          >
            {/* Image and Title Section */}
            <div className="p-4 grid grid-cols-3 justify-between border-b-2 border-black w-full lg:w-[24rem] mx-auto">
              <ImageShape src={teamMember.image} alt={teamMember.role} />
              <div className="col-span-2 flex flex-col justify-between">
                <h3 className="font-semibold text-md lg:text-lg mb-4 inline-block px-2 py-1 rounded">
                  {teamMember.name}
                </h3>
                <a
                  href="#"
                  className="flex items-center gap-2 text-black hover:text-PRIMARY font-medium"
                >
                  {teamMember.role}
                </a>
              </div>
            </div>

            {/* Description Section */}
            <div className="px-4 md:px-6 py-4 lg:px-10 lg:h-72 md:h-32 w-full lg:w-[28rem]">
              <p className="text-sm lg:text-base text-gray-700 line-clamp-3">
                {teamMember.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamSection;
