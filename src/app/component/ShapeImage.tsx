"use client";
// components/ImageShape.js
import Image from 'next/image';

const ImageShape = ({ src, alt }:{src:string, alt:string}) => {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute top-0 left-0 w-full h-full bg-green-400 rounded-full" />
      <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-green-300 rounded-full" />
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-green-200 rounded-full" />
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default ImageShape;