"use client"
import React from 'react'
import ImageShape from './ShapeImage';
const TeamSection = () => {
    const teamMembers = [
      { name: "John Doe", role: "SEO Expert", image: "/team/john.png" },
      { name: "Jane Smith", role: "PPC Specialist", image: "/team/jane.png" },
      { name: "Michael Brown", role: "Social Media Manager", image: "/team/michael.png" },
      { name: "Michael Brown", role: "Social Media Manager", image: "/team/michael.png" },
      { name: "Michael Brown", role: "Social Media Manager", image: "/team/michael.png" },
      { name: "Michael Brown", role: "Social Media Manager", image: "/team/michael.png" },
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
      {/* <section className="py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="rounded-full w-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 ">
      {teamMembers.map((teamMember, index) => (
        <div
          key={index}
          className={` p-6 rounded-3xl shadow-lg flex flex-col justify-between `}
        >
          {/* Title Section */}
          <h3
            className={`font-semibold text-lg mb-4 inline-block px-2 py-1 rounded ` }
          >
            {teamMember.name}
          </h3>
          <ImageShape src={teamMember.image}
            alt={teamMember.role}/>
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
      ))}
    </div>
      </>
    );
  };
  
  export default TeamSection;
  