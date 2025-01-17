"use client"
import React from 'react'
const CaseStudies = () => {
    const studies = [
      {
        description:
          "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        link: "#",
      },
      {
        description:
          "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
        link: "#",
      },
      {
        description:
          "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        link: "#",
      },
    ];
  
    return (
      <section className="py-16  text-white my-11">
        {/* Title and Description */}
        {/* <div className="text-center mb-12 px-4"> */}
        <div className="flex items-start space-x-10 mb-14 ml-10">
            <div className="bg-[#b9ff66] text-black font-semibold text-4xl p-1  rounded-md text-left w-[15rem]">
                Case Studies
            </div>
          <div className="text-black text-xl font-extralight w-[550px] ">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </div>
        </div>
  
        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 mx-32 rounded-3xl bg-gray-900 ">
          {studies.map((study, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 flex flex-col gap-4 border-r-2 w-[23rem] ${index===2? 'border-gray-900':'border-white'}`}
            >
              <p className="text-gray-300">{study.description}</p>
              <a
                href={study.link}
                className="text-lime-400 font-medium flex items-center hover:underline gap-2"
              >
                Learn more{" "}
                <span className={`h-8 w-8 flex items-center justify-center rounded-full -rotate-[30deg]`}><svg xmlns="http://www.w3.org/2000/svg" width={22} height={22}  viewBox="0 0 448 512"><path fill={'green'} d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
                  </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CaseStudies;
  


