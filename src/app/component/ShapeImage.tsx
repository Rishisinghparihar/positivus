"use client";
import Image from 'next/image';

const ImageShape = ({ src, alt }:{src:string, alt:string}) => {
  return (
 <div className="flower-container">
  <div className="petal" />
  <div className="petal" />
  <div className="petal" />
  <div className="petal" />
  <div className="center">
  <Image
        src={src}
        alt={alt}
        id='img'
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
  </div>
</div>

  );
};

export default ImageShape;