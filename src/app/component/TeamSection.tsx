"use client"
import React from 'react'
import ImageShape from './ShapeImage';
const TeamSection = () => {
    const teamMembers = [
      { name: "John Doe", role: "SEO Expert",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", image: "/44.png" },
      { name: "Jane Smith", role: "PPC Specialist",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "/dekhna.png" },
      { name: "Michael Brown", role: "Social Media Manager",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "/50.png" },
      { name: "Michael Brown", role: "Social Media Manager",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "/46.png" },
      { name: "Michael Brown", role: "Social Media Manager",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "/47.png" },
      { name: "Michael Brown", role: "Social Media Manager",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "/51.png" },
    //   { name: "Michael Brown", role: "Social Media Manager", image: "/team/michael.png" },
    ];
  
    return (
      <>
      <div className="pl-28 py-14 bg-white">
      <div className="flex items-center gap-4">
        <div className="bg-[#b9ff66] text-black font-semibold text-4xl p-1 rounded">
          Team
        </div>
        <p className="text-gray-700 text-xl capitalize w-[29.5rem]">
          meet the skilled and expericed team behind our succesfull digital marketing strategies.
        </p>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 ">
      {teamMembers.map((teamMember, index) => (
        <div key={index} className='h-72 w-[28rem] rounded-[2.5rem] border-[1.5px] shadow-xl border-b-[6px] border-gray-900'>
        <div
          
          className={` p-4 ml-5 grid grid-cols-3 justify-between border-b-2 border-black w-[24rem] mx-auto`}
        >
          <ImageShape src={teamMember.image}
            alt={teamMember.role}
            />
          {/* Title Section */}
          <h3
            className={`font-semibold text-lg mb-4 inline-block px-2 py-1 rounded ` }
          >
            {teamMember.name}
          </h3>
          
          {/* Image Section */}
          {/* <img
            src={card.image}
            alt={card.title}
            className="w-full h-32 object-contain mb-4" */}
          {/* /> */}

          {/* Learn More Section */}
          <a
            href="#"
            className={`flex items-center gap-2 text-black hover:text-green-600 font-medium `}
          >
            
            <span className="flex gap-3">
              <span className={`h-8 w-8 flex items-center justify-center  rounded-full -rotate-[30deg]`}></span>
              <span className="my-1">{teamMember.role}</span>
              </span>
            {/* <span className="text-green-600">&#8594;</span> */}
          </a>
        </div>
        <div className='px-10 pt-4 h-72 w-[28rem] '>
          <p className='line-clamp-3'>{teamMember.description}</p>
        </div>
        </div>
      ))}
    </div>
      </>
    );
  };
  
  export default TeamSection;
  