"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Keeps track of the open accordion item

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
    <section className="mx-28">
      <div className=" px-4 ">
      <div className="flex gap-8 mb-16">
      <div className="bg-[#B9FF66] text-black font-semibold text-3xl flex items-center justify-center p-1 w-[20rem] rounded-md text-left ">
                Our Working Process
      </div>
        {/* <h2 className="text-3xl font-bold text-center mb-8">Our Working Process</h2> */}
        <div className="text-gray-700 text-xl w-80 ">
            Step-by-Step Guide to Achieving Your Business Goals      
        </div>
        </div>  
        {/* <p className="text-center text-gray-600 mb-12">
          Step-by-Step Guide to Achieving Your Business Goals
        </p> */}
         <div className="space-y-4 mb-10 transition-all duration-700">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border rounded-3xl ${
                openIndex === index ? "bg-[#B9FF66]" : "bg-white"
              } shadow-4xl transition-all duration-200`}
            >
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center p-6 cursor-pointer transition-all duration-700"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-4 transition-all duration-700">
                  <span
                    className={`text-[4rem] font-bold ${
                      openIndex === index ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3
                    className={`text-3xl font-semibold ${
                      openIndex === index ? "text-black" : "text-gray-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <div
                  className={`text-2xl ${
                    openIndex === index ? "rotate-180" : ""
                  } transition-transform`}
                >
                  {openIndex === index ? <span className="flex w-[3.5rem] h-[3.5rem] border-2 rounded-full items-center justify-center bg-white"><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 448 512"><path fill="black" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></span> : <span className="flex w-[3.5rem] h-[3.5rem] rounded-full border-2 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></span>}
                </div>
              </div>

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="p-6 border-t-2 w-[69rem] mx-auto border-gray-800
                 text-gray-800">
                  <p className="text-lg">{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
