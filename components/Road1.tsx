"use client";
import React from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin);

const Road1 = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>("#bike, #horse");

    elements.forEach((el, i) => {
      const tl = gsap.timeline();

      tl.to(el as Element, {
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: i * 0.1,
          end: 1,
        },
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: "#rainbow-one",
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          fastScrollEnd: true,
        },
      });

      gsap.to(el, {
        y: "+=8",
        duration: "random(1.5, 2.5)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.3,
      });

      gsap.to(el, {
        rotation: "random(-2, 2)",
        duration: "random(2, 3)",
        ease: "power1.inOut",
        repeat: -1,
        repeatRefresh: true,
        delay: i * 0.2,
      });
    });
  }, []);
  return (
    <div className="ml-[25%] w-full absolute lg:bottom-44 md:bottom-36 sm:bottom-20 xl:bottom-56 2xl:top-32 bottom-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1685 287"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        <path
          id="path"
          d="M0 0C1441.1 26.3213 1684.5 218.5 1684.5 218.5"
          fill="none"
        />
      </svg>
      <div id="bike" className=" rainbow-rider ">
        <Image
          src={"/bike-boy.svg"}
          width={100}
          height={100}
          alt={"bike-boy"}
          className="w-full h-auto"
        />
      </div>
      <div id="horse" className=" rainbow-rider">
        <Image
          src={"/horse-girl.svg"}
          width={100}
          height={100}
          alt={"horse-girl"}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Road1;
