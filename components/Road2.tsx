import React from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(MotionPathPlugin);
const Road2 = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>("#horse2, #bike2");

    elements.forEach((el, i) => {
      const tl = gsap.timeline();

      tl.to(el as Element, {
        motionPath: {
          path: "#path2",
          align: "#path2",
          alignOrigin: [0.5, 0],
          autoRotate: true,
          start: i * 0.1,
          end: 1,
        },
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: "#rainbow-two",
          start: "20% center",
          end: "150% center",
          scrub: 1.5,
          fastScrollEnd: true,
        },
      });
    });
  }, []);

  return (
    <div className=" w-[120%]  absolute lg:bottom-8 md:bottom-6 sm:bottom-20 xl:bottom-12 2xl:bottom-20 bottom-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1685 287">
        <path
          id="path2"
          d="M1684.5 68.5 C1441.1 260.6787 0 287 0 287"
          fill="none"
        />
      </svg>
      <div id="horse2" className="rainbow-rider">
        <Image
          style={{ transform: "rotate(180deg)" }}
          src="/horse-girl-2.svg"
          alt="horse-girl2"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
      <div id="bike2" className="rainbow-rider">
        <Image
          style={{ transform: "rotate(180deg)" }}
          src="/bike-boy-2.svg"
          alt="bike-boy2"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Road2;
