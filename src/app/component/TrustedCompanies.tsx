"use client";
import React from "react";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { src: "/amazon-logo404.png", alt: "Amazon", width: 100, height: 150, className: " aspect-[3/2] object-contain mt-6" },
    { src: "/dribbble-logo1.png", alt: "Dribbble", width: 150, height: 150, className: "aspect-[3/2] object-contain" },
    { src: "/hub1.png", alt: "Hubspot", width: 150, height: 150, className: "aspect-[3/2] object-contain" },
    { src: "/notion1.png", alt: "Notion", width: 150, height: 150, className: "aspect-[3/2] object-contain" },
    { src: "/netflix1.png", alt: "Netflix", width: 150, height: 150, className: "aspect-[3/2] object-contain" },
    { src: "/zoom1.png", alt: "Zoom", width: 150, height: 150, className: "aspect-[3/2] object-contain" },
  ];

  return (
    <section>
      {/* <h2 className="text-center text-xl font-semibold mb-6">Trusted by:</h2> */}
      <div className="flex items-start justify-evenly  ">
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            width={company.width}
            height={company.height}
            className={company.className}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
