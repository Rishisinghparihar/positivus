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
      {/* Header Section */}
      <div className="px-6 md:pl-12 lg:pl-28 py-14 bg-white">
        <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-4">
          <div className="bg-PRIMARY text-black font-semibold md:text-3xl lg:text-4xl p-1 rounded">
            Testimonials
          </div>
          <p className="text-gray-700 md:text-lg lg:text-xl max-w-full md:max-w-lg">
            Hear from our satisfied clients: Read our testimonials to learn more
            about our digital marketing services.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative lg:w-full md:max-w-5xl mx-52 overflow-hidden rounded-[38px] bg-gray-700">
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
                className="object-cover w-auto h-auto"
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
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 lg:mb-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-4 md:px-8 lg:w-[24rem]">
          <button
            onClick={handlePrev}
            aria-label="Go to previous slide"
            title="Go to previous slide"
            className="bg-gray-700 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            aria-label="Go to next slide"
            title="Go to next slide"
            className="bg-gray-700 text-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600"
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default DemoCarousel;
