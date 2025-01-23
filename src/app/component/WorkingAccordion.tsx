"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "We will conduct thorough research and develop a customized strategy to help achieve your business goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our team will implement the strategies and monitor their performance to ensure optimal results.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "We will continually monitor and optimize the performance of the strategies to deliver long-term success.",
    },
    {
      number: "05",
      title: "Monitoring and Optimization",
      description:
        "We will continually monitor and optimize the performance of the strategies to deliver long-term success.",
    },
    {
      number: "06",
      title: "Monitoring and Optimization",
      description:
        "We will continually monitor and optimize the performance of the strategies to deliver long-term success.",
    },
  ];

  return (
    <section className="px-4 lg:mx-28 py-12 bg-white">
      {/* Header Section */}
      <div className="flex md:flex-row lg:gap-8 lg:items-center mb-16">
        <div className="bg-PRIMARY text-black font-semibold text-4xl p-1 md:w-[20rem] items-center justify-center lg:-ml-2  rounded-md mb-4 text-left lg:mb-0 w-[15rem]">
          Our Working Process
        </div>
        <p className="text-gray-700 text-lg md:text-xl max-w-full md:max-w-3xl">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion Section */}
      <div className="space-y-4 md:space-y-8 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`border rounded-3xl ${
              openIndex === index ? "bg-PRIMARY" : "bg-white"
            } shadow-4xl transition-all duration-300`}
          >
            {/* Accordion Header */}
            <div
              className="flex flex-col md:flex-row justify-between items-center md:items-center p-4 md:p-6 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-4">
                <span
                  className={` md:text-[4rem] font-bold ${
                    openIndex === index ? "text-black" : "text-gray-600"
                  }`}
                >
                  {step.number}
                </span>
                <h3
                  className={`md:text-3xl font-semibold ${
                    openIndex === index ? "text-black" : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
              <div
                className={`lg:text-2xl md:text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? (
                  <span className="flex w-10 md:w-[3.5rem] h-10 md:h-[3.5rem] border-2 rounded-full items-center justify-center bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="black"
                        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                      />
                    </svg>
                  </span>
                ) :  (
                  <span className="flex w-10 md:w-[3.5rem] h-10 md:h-[3.5rem] border-2 rounded-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="black"
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="p-6 md:p-6 border-t-2 border-gray-800 lg:w-[69rem] md:w-[37rem] sm:w-[10rem] mx-auto text-gray-800">
                <p className="text-lg md:text-lg">{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
