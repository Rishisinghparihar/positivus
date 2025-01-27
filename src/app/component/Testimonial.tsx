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
      <div className="px-4 py-8 bg-white sm:px-6 md:px-12 lg:pl-28 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
          <div className="lg:text-4xl sm:text-3xl md:text-4xl bg-PRIMARY text-black font-semibold rounded mb-4 lg:mb-0 p-2">
            Testimonials
          </div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:w-[30rem]">
            Hear from our satisfied clients: Read our testimonials to learn more
            about our digital marketing services.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full sm:w-[90%] md:max-w-5xl mx-auto overflow-hidden rounded-xl bg-gray-700 sm:px-4 lg:h-[30rem]">
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
                width={250}
                height={250}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-4 w-[20rem]">
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
