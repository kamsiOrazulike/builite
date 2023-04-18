"use client";
// import Typed from "typed.js";
import { Link as LinkScroll } from "react-scroll";
import React, { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <div className="text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="max-w-[800px] mt-[-14px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-1">QUOTE ONE</p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-medium md:py-6 ease-in-out duration-500">
          QUOTE TWO
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-xl sm:text-xl text-md font-light my-4">
            Your one-stop reliable source for building services and investments
          </p>
        </div>
        <LinkScroll
          to="theatre"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="bg-[#FFBE40] w-[150px] hover:scale-105 rounded-md font-medium my-6 mx-auto py-2 text-white transition-all duration-500">
            Get started
          </button>
        </LinkScroll>
      </div>
    </div>
  );
}
