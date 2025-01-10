"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/index.js";
import MobileMenu from "./NavButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link href={href} className="nav-li_a font-medium">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const timeout = useRef<NodeJS.Timeout>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const handleScroll = () => {
      if (timeout.current) clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 75) {
          gsap.to(navRef.current, {
            duration: 0.5,
            yPercent: -100,
            ease: "power4.out",
          });
        } else {
          gsap.to(navRef.current, {
            duration: 0.5,
            yPercent: 0,
            ease: "power4.out",
          });
        }

        lastScrollY.current = currentScrollY;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0  z-50 font-rubik h-20"
    >
      <div className=" mx-auto bg-white w-screen">
        <div className="flex justify-between items-center mx-auto c-space max-w-7xl">
          <Link href="/" className="">
            <Image src="/logo-ciufit.svg" width={100} height={100} alt="logo" />
          </Link>
          <MobileMenu />
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className="absolute top-10 left-0 w-full cloud-background"></div>
    </header>
  );
};

export default NavBar;
