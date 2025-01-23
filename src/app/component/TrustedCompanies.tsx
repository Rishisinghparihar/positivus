"use client";
import React from "react";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { src: "/amazon-logo404.png", alt: "Amazon", width: 100, height: 150 },
    { src: "/dribbble-logo1.png", alt: "Dribbble", width: 150, height: 150 },
    { src: "/hub1.png", alt: "Hubspot", width: 150, height: 150 },
    { src: "/notion1.png", alt: "Notion", width: 150, height: 150 },
    { src: "/netflix1.png", alt: "Netflix", width: 150, height: 150 },
    { src: "/zoom1.png", alt: "Zoom", width: 150, height: 150 },
  ];

  return (
    <section className="py-12">
      {/* <h2 className="text-center text-2xl font-semibold mb-8">
        Trusted by
      </h2> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            width={company.width}
            height={company.height}
            className="aspect-[3/2] object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
