"use client"
import React from 'react'
import Image from "next/image";

const TrustedCompanies = () => {
  const data = [];
  return (
    <section className=" ">
      {/* <h2 className="text-center text-xl font-semibold mb-6">Trusted by:</h2> */}
      <div className="flex gap-44">
        <Image 
          src="/amazon.png" 
          alt="Amazon" 
          width={100} 
          height={100} 
          className="h-12" 
        /> 
        <Image 
        src="/dribble.png" 
        alt="dribble" width={100} 
        height={100} 
        className="h-12" />
        <Image 
        src="/hubspot.png" 
        width={100} 
        height={100} 
        alt="Hubspot" 
        className="h-12" />
        <Image 
        src="/notion.png" 
        width={100} 
        height={100} 
        alt="Notion" 
        className="h-12" />
        <Image 
        src="/netflix.png" 
        width={100} 
        height={100} 
        alt="Netflix" 
        className="h-12" />
        <Image 
        src="/zoom.png" 
        width={100} 
        height={100} 
        alt="Zoom" 
        className="h-12" />
      </div>
    </section>
  );
};

export default TrustedCompanies;