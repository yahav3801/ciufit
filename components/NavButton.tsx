"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NavItems } from "./NavBar";

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="sm:hidden flex"
        aria-label="Toggle menu"
      >
        <Image
          src={isOpen ? "/close.svg" : "/hamburger.svg"}
          width={20}
          height={20}
          alt="menu"
        />
      </button>
      <div
        className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} mt-64`}
      >
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
};

export default NavButton;
