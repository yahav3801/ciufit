"use client";
import React, { useRef, useState, useEffect } from "react";
import { gallery } from "@/constants";
import PolaroidPhoto from "./PolaroidPhoto";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Road3 from "./Road3";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  img: string;
  title: string;
}

interface ColumnProps {
  items: GalleryItem[];
  index: number;
}

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shuffledGallery, setShuffledGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const shuffleArray = (array: GalleryItem[]) => {
      return array.slice().sort(() => Math.random() - 0.5);
    };

    setShuffledGallery(shuffleArray(gallery));
  }, []);

  const mobileColumns = [
    shuffledGallery.slice(0, 6),
    shuffledGallery.slice(6, 12),
  ];
  const laptopColumns = [
    shuffledGallery.slice(0, 4),
    shuffledGallery.slice(4, 8),
    shuffledGallery.slice(8, 12),
  ];
  const desktopColumns = [
    shuffledGallery.slice(0, 3),
    shuffledGallery.slice(3, 6),
    shuffledGallery.slice(6, 9),
    shuffledGallery.slice(9, 12),
  ];

  useGSAP(() => {
    gsap.context(() => {
      // Smooth scroll effect on the container
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
    });
  }, []);

  return (
    <main id="experiences" className="w-full flex flex-col">
      <section className="w-full h-[20vh] bg-sky texture-grain md:-mt-[6vh] -mt-[2vh] shadow-[0px_12px_12px_rgba(0,0,0,0.25)]" />

      <section
        ref={containerRef}
        className="w-full h-[125vh] overflow-hidden -z-20 py-[2vw]"
      >
        {/* Mobile layout */}
        <div className="md:hidden w-full h-full flex gap-[4vw] px-[2vw] justify-center">
          {mobileColumns.map((columnItems, idx) => (
            <Column key={idx} items={columnItems} index={idx} />
          ))}
        </div>

        {/* Laptop layout (Small laptops and tablets: 3 columns) */}
        <div className="hidden md:flex xl:hidden w-full h-full gap-[2vw] px-[2vw] justify-center">
          {laptopColumns.map((columnItems, idx) => (
            <Column key={idx} items={columnItems} index={idx} />
          ))}
        </div>

        {/* Desktop layout (Large desktops: 4 columns) */}
        <div className="hidden xl:flex w-full h-full gap-[2vw] px-[2vw] justify-center">
          {desktopColumns.map((columnItems, idx) => (
            <Column key={idx} items={columnItems} index={idx} />
          ))}
        </div>
      </section>

      <Road3 />
    </main>
  );
};

const Column: React.FC<ColumnProps> = ({ items, index }) => {
  const columnRef = useRef(null);

  useGSAP(() => {
    gsap.context(() => {
      const initialY = [-400, 0, -600, 50][index % 4];
      const yMove = index % 2 === 0 ? 150 : -150;
      const speed = 1 + index * 1;

      gsap.set(columnRef.current, { y: initialY });
      gsap.to(columnRef.current, {
        y: `+=${yMove * speed}`,
        ease: "power1.in",
        scrollTrigger: {
          trigger: columnRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });
  }, [index]);

  return (
    <div
      ref={columnRef}
      className="w-full max-w-[400px] min-w-[150px] flex flex-col  gap-[4vw] my-[4vw]"
    >
      {items.map((item) => (
        <div key={item.id} className="w-full">
          <PolaroidPhoto src={item.img} alt={item.title} title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
