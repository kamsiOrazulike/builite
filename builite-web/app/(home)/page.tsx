"use client";
import React, { useEffect, useRef } from "react";

export default function Home() {
  return (
    <>
      <div className="text-white bg-placeHolder bg-fixed bg-cover">
        <div className="w-full bg-black/50">
          <div className="max-w-[800px] mt-[-14px] w-full h-screen mx-auto text-left flex flex-col justify-center">
            <h1 className="md:text-7xl sm:text-7xl text-5xl md:py-2 ease-in-out duration-500">
              Discover your home.
            </h1>

            <p className="md:text-4xl sm:text-3xl text-xl text-white/80 font-light mt-2 mb-4">
              Let's get you a home perfect for you
            </p>

            <button className="bg-[#57C8DA] w-[150px] hover:scale-105 rounded-md font-medium my-6 mx-auto py-2 text-white transition-all duration-500">
              Get started
            </button>
          </div>
        </div>
        {/* <Section1 /> */}
      </div>
    </>
  );
}
