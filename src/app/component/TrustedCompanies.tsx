// "use client"
// import React from 'react'
// import Image from "next/image";

// const TrustedCompanies = () => {
//   const data = [];
//   return (
//     <section className=" ">
//       {/* <h2 className="text-center text-xl font-semibold mb-6">Trusted by:</h2> */}
//       <div className="flex gap-40 justify-center">
//         <Image 
//           src="/amazon2.png" 
//           alt="Amazon" 
//           width={100} 
//           height={100} 
//           className="h-24 w-32" 
//         /> 
//         <Image 
//         src="/dribbble-logo1.png" 
//         alt="dribble" width={100} 
//         height={100} 
//         className="h-24 w-32 " />
//         <Image 
//         src="/hub1.png" 
//         width={100} 
//         height={100} 
//         alt="Hubspot" 
//         className="h-24 w-28" />
//         <Image 
//         src="/notion1.png" 
//         width={100} 
//         height={100} 
//         alt="Notion" 
//         className="h-24 w-32" />
//         <Image 
//         src="/netflix1.png" 
//         width={100} 
//         height={100} 
//         alt="Netflix" 
//         className="h-[21] w-32" />
//         <Image 
//         src="/zoom1.png" 
//         width={100} 
//         height={100} 
//         alt="Zoom" 
//         className="h-24" />
//       </div>
//     </section>
//   );
// };

// export default TrustedCompanies;

"use client";
import React from "react";
import Image from "next/image";

const TrustedCompanies = () => {
  const companies = [
    { src: "/amazon2.png", alt: "Amazon", width: 100, height: 100, className: "h-24 w-32 " },
    { src: "/dribbble-logo1.png", alt: "Dribbble", width: 100, height: 100, className: "h-24 w-32" },
    { src: "/hub1.png", alt: "Hubspot", width: 100, height: 100, className: "h-24 w-28" },
    { src: "/notion1.png", alt: "Notion", width: 100, height: 100, className: "h-24 w-32" },
    { src: "/netflix1.png", alt: "Netflix", width: 100, height: 100, className: "h-[21] w-32" },
    { src: "/zoom1.png", alt: "Zoom", width: 100, height: 100, className: "h-24" },
  ];

  return (
    <section>
      {/* <h2 className="text-center text-xl font-semibold mb-6">Trusted by:</h2> */}
      <div className="flex gap-40 justify-center">
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
