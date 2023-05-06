/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "@/src/img/Logo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="container mx-auto w-[90%]">
      <div className="md:flex justify-between items-center">
        <Image src={Logo} width={"60px"} height={"60px"} />
        <div className="hidden md:flex gap-4 font">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Client</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
