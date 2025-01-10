"use client";
import React, { useRef, useEffect } from "react";
import { reviews } from "@/constants/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.innerHTML = slider.innerHTML + slider.innerHTML;

    const reviewWidth = slider.querySelector("div")?.offsetWidth || 300;
    const gap = 32;
    const totalWidth = (reviewWidth + gap) * reviews.length;

    animationRef.current = gsap.to(slider, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.resume();
      }
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="h-[50vh] overflow-hidden relative mt-2 ">
      <div
        ref={sliderRef}
        className="flex gap-8 absolute py-8 px-4"
        style={{ direction: "rtl" }}
      >
        {reviews.map((review) => (
          <div className=" review hebrew-period" key={review.id}>
            <p className="text-center md:text-xl text-md leading-relaxed text-gray-700">
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
