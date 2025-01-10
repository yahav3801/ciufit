import React from "react";
import Link from "next/link";
import Ping from "./ping";

const ContactBtn = () => {
  return (
    <>
      <Link
        href="https://wa.me/972505717354"
        target="_blank"
        className="heading-btn"
      >
        <Ping />
        <p>צרו קשר</p>
      </Link>
    </>
  );
};

export default ContactBtn;
