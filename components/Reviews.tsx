"use client";

import React, { useRef, useState } from "react";
import { reviews } from "@/constants/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isLoopRunning, setIsLoopRunning] = useState(true);
  const animationRef = useRef<gsap.core.Tween>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.innerHTML = slider.innerHTML + slider.innerHTML;

    const reviewWidth = slider.querySelector("div")?.offsetWidth || 300;
    const gap = 32;
    const totalWidth = (reviewWidth + gap) * reviews.length;

    const animation = gsap.to(slider, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    animationRef.current = animation;
  }, []);

  const handleClick = () => {
    if (isLoopRunning) {
      animationRef.current?.pause();
    } else {
      animationRef.current?.play();
    }

    setIsLoopRunning(!isLoopRunning);
  };

  return (
    <div className="h-[50vh] overflow-hidden relative mt-2">
      <div
        ref={sliderRef}
        className="flex gap-8 absolute py-8 px-4"
        style={{ direction: "rtl" }}
        onClick={handleClick}
      >
        {reviews.map((review) => (
          <div className="review hebrew-period cursor-pointer" key={review.id}>
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
