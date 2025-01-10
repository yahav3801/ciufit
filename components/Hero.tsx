"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Road1 from "@/components/Road1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import ContactBtn from "./ContactBtn";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const scope = useRef<HTMLDivElement>(null);
  const balloonRef = useRef<HTMLDivElement>(null);

  // Main animations with scope
  useGSAP(
    () => {
      const splitHeader = new SplitType(".heading", { types: "lines" });
      const splitSubHeader = new SplitType(".sub-heading", { types: "lines" });

      const textTl = gsap.timeline();
      textTl
        .from(splitHeader.lines, {
          opacity: 0,
          clipPath: "inset(0 100% 100% 0)",
          stagger: 0.2,
          duration: 0.5,
        })
        .from(
          splitSubHeader.lines,
          {
            opacity: 0,
            clipPath: "inset(0 100% 100% 0)",
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.1"
        )
        .from(
          ".heading-btn",
          {
            opacity: 0,
            scale: 0,
            rotate: 180,
            ease: "elastic.inOut",
            duration: 2,
          },
          "-=1"
        );

      gsap.to(".heading", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".sub-heading", {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".heading-btn", {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope }
  );

  // Separate balloon animations without scope
  useGSAP(() => {
    const balloonWrapper = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        // Floating animation
        gsap.to(balloonRef.current, {
          y: "+=20",
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Rotation animation
        gsap.to(balloonRef.current, {
          rotation: "random(-5, 5)",
          duration: "random(2, 4)",
          ease: "power1.inOut",
          repeat: -1,
          repeatRefresh: true,
        });

        // Scroll animation
        gsap.to(balloonRef.current, {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: "#section-hero",
            start: "top top",
            end: "center top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      },
    });

    balloonWrapper.from(balloonRef.current, {
      opacity: 0,
      y: 200,
      duration: 2,
    });
  });

  return (
    <>
      <section className="min-h-screen w-full overflow-hidden">
        <div
          id="section-hero"
          className="bg-[#68BFEA] w-full h-[70vh] flex items-center justify-center texture-grain"
          ref={scope}
        >
          <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-around gap-4 ">
            <div
              ref={balloonRef}
              id="balloon"
              className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] 2xl:max-w-[240px] mb-4 ml-40 md:mb-32 md:ml-4"
            >
              <Image
                src={"/hot-air-balloon.svg"}
                width={200}
                height={200}
                className="w-full h-auto"
                alt={"balloon"}
              />
            </div>
            <div className="text-right flex flex-col items-center md:items-end gap-4 md:order-last order-first ">
              <div className="heading md:text-right">
                ברוכים הבאים {<br />}לצהרון כיופית
              </div>
              <div>
                <div className="sub-heading">באוירה ביתית חמה עם המון אהבה</div>
              </div>

              <ContactBtn />
            </div>
          </div>
        </div>
        <div
          id="rainbow-one"
          className="w-[120%] -ml-[15%]  sm:-mt-12 md:-mt-22 lg:-mt-24 xl:-mt-20 2xl:-mt-24 -mt-8 relative"
        >
          <Image
            src="/rainbow-1.svg"
            alt="rainbow1"
            width={2400}
            height={200}
            className="w-full"
            priority
          />
          <Road1 />
        </div>
      </section>
    </>
  );
};

export default Hero;
