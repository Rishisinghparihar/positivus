"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const DemoCarousel = () => {
  const slides = ["/90.png", "/91.png", "/93.png", "/94.png", "/95.png"]; // Images in the public folder
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="pl-28 py-14 bg-white">
      <div className="flex items-center gap-4">
        <div className="bg-[#b9ff66] text-black font-semibold text-4xl p-1 rounded">
          Testimonials
        </div>
        <p className="text-gray-700 text-xl w-[37rem]">
          Hear from our Satisfied clients: Read our testimonnials to learn more about our digital marketing services.
        </p>
      </div>
    </div>
    <div className="relative w-[80rem] mx-auto overflow-hidden rounded-lg bg-gray-700 ">
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            title={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 mb-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[24rem] px-4">
        <button
          onClick={handlePrev}
          aria-label="Go to previous slide"
          title="Go to previous slide"
          className="bg-gray-700 text-white w-10 h-10 flex justify-center items-center rounded-full hover"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          aria-label="Go to next slide"
          title="Go to next slide"
          className="bg-gray-700 text-white w-10 h-10 flex justify-center rounded-full items-center hover"
        >
          &rarr;
        </button>
      </div>
    </div>
    </>
  );
};

export default DemoCarousel;

// "use client";
// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//       name: "John Smith",
//       designation: "Marketing Director at XYZ Corp",
//     },
//     {
//       text: "The team at Positivus is truly dedicated to understanding our business needs and delivering results. Their expertise in digital marketing has helped us achieve our business goals in record time.",
//       name: "Jane Doe",
//       designation: "CEO at ABC Inc.",
//     },
//     {
//       text: "Positivus has been a game changer for our company. Their strategic approach and commitment to excellence have significantly improved our online presence.",
//       name: "Michael Brown",
//       designation: "Founder at Startup Hub",
//     },
//   ];

//   return (
//     <div className="bg-gray-700 py-20">
//       <div className="max-w-7xl mx-auto px-10">
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="relative bg-black text-white p-10 rounded-xl border border-lime-400"
//             >
//               <p className="text-sm italic">"{testimonial.text}"</p>
//               <div className="mt-6">
//                 <p className="text-lime-400 font-bold">{testimonial.name}</p>
//                 <p className="text-gray-400 text-sm">{testimonial.designation}</p>
//               </div>
//               <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-4 w-8 bg-black border-lime-400 border-b border-r rotate-45"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
