"use client"
// import React from 'react'
// interface TestimonialProps {
//   name: string;
//   title: string;
//   quote: string;
// }

// const Testimonial: React.FC<TestimonialProps> = ({ name, title, quote }) => {
//   return (
//     <div className="testimonial">
//       <p className="quote">{quote}</p>
//       <div className="author">
//         <span className="name">{name}</span>
//         <span className="title">{title}</span>
//       </div>
//     </div>
//   );
// };

// const Testimonials: React.FC = () => {
//   const testimonialsData: TestimonialProps[] = [
//     {
//       name: 'John Smith',
//       title: 'Marketing Director at XYZ Corp',
//       quote:
//         '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
//     },
//     // Add more testimonials here
//   ];

//   return (
//     <section className="testimonials-section">
//       <h2>Testimonials</h2>
//       <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
//       <div className="testimonials-container">
//         {testimonialsData.map((testimonial, index) => (
//           <Testimonial key={index} {...testimonial} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


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
    <div className="relative max-w-[30rem] mx-auto mt-8 overflow-hidden rounded-lg bg-gray-700">
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-full px-4">
        <button
          onClick={handlePrev}
          aria-label="Go to previous slide"
          title="Go to previous slide"
          className="bg-gray-800 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          aria-label="Go to next slide"
          title="Go to next slide"
          className="bg-gray-800 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600"
        >
          &rarr;
        </button>
      </div>
    </div>
    </>
  );
};

export default DemoCarousel;

