import React, { useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(MotionPathPlugin);
const Road3 = () => {
  const bikeRef = useRef<HTMLElement>(null);
  const horseRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLDivElement>("#bike3, #horse3");
    elements.forEach((el, i) => {
      const tl = gsap.timeline();

      tl.to(el as Element, {
        motionPath: {
          path: "#path3",
          align: "#path3",
          alignOrigin: [0.9, 0.9],
          autoRotate: true,
          start: i * 0.1,
          end: 1,
        },
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".contain",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
          fastScrollEnd: true,
        },
      });

      gsap.to("#sun", {
        y: "+=20",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to("#sun", {
        rotation: "random(-5, 5)",
        duration: "random(2, 4)",
        ease: "power1.inOut",
        repeat: -1,
        repeatRefresh: true,
      });

      gsap.to("#sun", {
        y: -200,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".contain",
          start: "top 70%",
          end: "center top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
  }, []);
  return (
    <section className="contain w-full h-[30vh] md:h-[50vh] bg-sky texture-grain z-10 shadow-[0px_-12px_12px_rgba(0,0,0,0.25)] relative object-cover">
      <div
        id="sun"
        className="absolute xl:right-[10%] md:right-[5%] right-[2%] top-[10%]  w-16 md:w-40 lg:w-44 xl:w-52 2xl:w-60 "
      >
        <Image src="/sun.svg" alt="sun" width={400} height={400} />
      </div>
      <div className="house xl:left-1/2 left-[65%] w-40 md:w-64 lg:w-80 xl:w-96 ">
        <Image src={"/house.svg"} alt="house" width={400} height={400} />
      </div>
      <div className="repeating-grass h-32 " />
      <div>
        <div
          id="rainbow-three"
          className="md:w-[100%] lg:w-[80%] xl:w-[60%] 2xl:w-[60%] w-[85%]  z-90 absolute 2xl:-ml-[25%] xl:-ml-[24%] lg:-ml-[30%] md:-ml-[52%] -ml-[46%] bottom-16 md:bottom-20 lg:bottom-12 xl:bottom-20 2xl:-top-52"
        >
          <Image
            src="/rainbow-3.svg"
            alt="rainbow3"
            width={2400}
            height={200}
            className="w-full"
            priority
          />
        </div>
        {/* Adjusted SVG container */}
        <div className="absolute -ml-[35%] md:-ml-[25%] lg:-ml-[8%] xl:-ml-[12%] 2xl:-ml-[12%] w-[90%] md:w-[85%] lg:w-[65%] xl:w-[55%] 2xl:w-[55%] left-0 bottom-16 lg:bottom-20 md:bottom-20 xl:bottom-24 2xl:bottom-[14%]">
          <svg
            viewBox="0 0 1725 586"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="none"
              id="path3"
              d="M1 1C1076.42 24.6926 1328.29 351.001 1377.29 542.183C1383.56 566.66 1404.49 585.5 1429.76 585.5H1725"
              className="path-overlay"
            />
          </svg>
          <div id="bike3" className=" rainbow-rider2 ">
            <Image
              src={"/bike-boy.svg"}
              width={100}
              height={100}
              alt={"bike-boy3"}
              className="w-full h-auto"
            />
          </div>
          <div id="horse3" className=" rainbow-rider2">
            <Image
              src={"/horse-girl.svg"}
              width={100}
              height={100}
              alt={"horse-girl3"}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Road3;
