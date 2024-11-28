"use client";
import { navLinks } from "@/constants";
import { hamburger } from "@/public/icons";
import Image from "next/image";
import React, { useState } from "react";

const HamburgerButton = () => {
  const [count, setCount] = useState(0);

  function AddCount() {
    console.log("addcount fired");
    setCount(1);
  }
  function MinCount() {
    setCount(0);
  }

  return (
    <div className="hidden max-lg:block">
      <div
        onClick={AddCount}
        className={`cursor-pointer ${count == 1 ? `hidden` : `block`}`}
      >
        <Image src={hamburger} alt="Hamburger" width={25} height={25}></Image>
      </div>
      <div
        className={`flex flex-col gap-4 bg-white p-8 shadow-2xl ${
          count == 0 ? `hidden` : `block`
        }`}
      >
        <div
          className="flex justify-end items-start flex-wrap cursor-pointer"
          onClick={MinCount}
        >
          <h1>X</h1>
        </div>

        <ul className="flex flex-col gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fons-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerButton;
