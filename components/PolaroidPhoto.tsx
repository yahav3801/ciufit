"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({ src, alt, title }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const randomRotation = Math.random() * 6 - 3;
    setRotation(randomRotation);
  }, []);

  return (
    <div
      style={{
        rotate: `${rotation}deg`,
      }}
    >
      <div className="bg-white p-2 sm:p-3 md:p-4 lg:p-6 pb-4 sm:pb-6 md:pb-8 lg:pb-10 rounded-[2px] shadow-xl">
        <div className="aspect-square w-32 sm:w-40 md:w-44 lg:w-60 xl:w-60 2xl:w-80 relative mx-auto">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-[2px]"
          />
        </div>
        <p className="text-center mt-2 sm:mt-3 md:mt-4 lg:mt-6 font-gveret-levin text-md md:text-2xl lg:text-3xl text-gray-800">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PolaroidPhoto;
