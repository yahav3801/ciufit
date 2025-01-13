"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Road2 from "./Road2";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const circlesRef = useRef(null);
  const toy2Ref = useRef(null);
  const toy1Ref = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top center",
          end: "bottom center",
        },
      });

      // Circles animation
      gsap.from(circlesRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circlesRef.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });

      // Top text animation
      gsap.from(textTopRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textTopRef.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });

      // Toy2 animation
      gsap.from(toy2Ref.current, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: toy2Ref.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });

      // Bottom text animation
      gsap.from(textBottomRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textBottomRef.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });

      // Toy1 animation
      gsap.from(toy1Ref.current, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: toy1Ref.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="min-h-screen w-full overflow-hidden sm:-mt-12 md:-mt-20 lg:-mt-40 xl:-mt-60 2xl:-mt-80 -mt-40 "
    >
      <div className=" max-w-7xl mx-auto p-6 font-gveret-levin text-neutral-800">
        <div
          ref={headerRef}
          className="text-shadow-letters text-center text-[#FFC526] text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-16"
        >
          היי! אני גילה
        </div>

        <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12 p-4 border-b border-gray-200">
            <div
              ref={circlesRef}
              className="w-full lg:w-1/3 md:w-2/3  flex flex-row-reverse justify-center relative"
            >
              <div className="relative mr-4">
                <div className="hover:bg-sky transition-colors  right-12 -top-12 texture-grain bg-[#68A0EA] w-12 h-12 lg:w-[55px] lg:h-[55px] md:w-[55px] md:h-[55px] rounded-full shadow-2xl z-10 relative">
                  <a
                    href="https://www.instagram.com/gila.ciufit/"
                    target="_blank"
                    className="text-white w-full h-full flex justify-center items-center "
                  >
                    <Instagram size={32} />
                  </a>
                </div>
                <div className="hover:bg-sky transition-colors  -right-3 -top-12  texture-grain bg-[#68A0EA] w-12 h-12 lg:w-[55px] lg:h-[55px] md:w-[55px] md:h-[55px] rounded-full shadow-2xl z-10 relative">
                  <a
                    href="https://www.facebook.com/profile.php?id=100002080400239"
                    target="_blank"
                    className="text-white w-full h-full flex justify-center items-center -ml-0.5"
                  >
                    <Facebook size={32} />
                  </a>
                </div>
                <div className="hover:bg-sky transition-colors  -right-10 -top-6  texture-grain bg-[#68A0EA] w-12 h-12 lg:w-[55px] lg:h-[55px] md:w-[55px] md:h-[55px] rounded-full shadow-2xl z-10 relative">
                  <a
                    target="_blank"
                    href="https://wa.me/972505717354"
                    className="text-white w-full h-full flex justify-center items-center"
                  >
                    <Image
                      src="/whatsapp.svg"
                      width={32}
                      height={32}
                      alt="whatsapp"
                    />
                  </a>
                </div>
              </div>

              <div className="-mr-4 md:-mr-6">
                <div className="texture-grain bg-sky w-48 h-48 md:w-[255px] md:h-[255px] rounded-full shadow-2xl overflow-hidden">
                  <Image
                    width={255}
                    height={255}
                    src="/aboutGila.png"
                    alt="Gila"
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>

            <div ref={textTopRef} className="w-full md:w-2/3 text-right">
              <p className="text-center lg:text-right leading-relaxed">
                מעל חמש עשרה שנים שאני מנהלת את צהרון כיופית, וכל בוקר אני
                מתעוררת עם חיוך לקראת יום חדש עם הילדים. הצהרון שלי התחיל כחלום
                קטן והיום הוא בית חם למשפחות רבות
              </p>
            </div>

            <div ref={toy2Ref} className="w-24 md:w-32 lg:w-40">
              <Image
                src="/toy2.svg"
                width={150}
                height={150}
                alt="toy2"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="p-4 flex flex-col lg:flex-row items-center gap-6 md:gap-14 z-100">
            <p
              ref={textBottomRef}
              className="text-center lg:text-right leading-relaxed w-full md:w-2/3"
            >
              יצרתי מקום שמשלב למידה עם משחק, טבע עם יצירה, ואין דבר שמשמח אותי
              יותר מלראות את העיניים הנוצצות של הילדים כשהם מגלים משהו חדש.
              הצהרון הזה הוא הבית השני שלי, והילדים - המשפחה המורחבת שלי
            </p>
            <div ref={toy1Ref} className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 md:w-32 lg:w-40 lg:-ml-28">
                <Image
                  src="/toy1.svg"
                  width={200}
                  height={200}
                  alt="toy1"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rainbow-two"
        className="w-[120%]  -ml-[5%] sm:-mt-12 md:-mt-20 lg:-mt-40 xl:-mt-60 2xl:-mt-80 -mt-8 relative"
      >
        <Image
          src="/rainbow-2.svg"
          alt="rainbow2"
          width={2400}
          height={200}
          className="w-full "
          priority
        />
        <div className="-ml-[12%] ">
          <Road2 />
        </div>
      </div>
    </section>
  );
};

export default About;
