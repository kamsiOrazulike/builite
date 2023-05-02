"use client";
import { Link as LinkScroll } from "react-scroll";
import React, { useEffect, useRef } from "react";

function Section1() {
  return (
    <section id="section1" className="bg-[#4c5c72]">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
          <button className="bg-[#4995ff] w-[150px] hover:scale-105 rounded-md font-medium my-6 mx-auto py-2 text-white transition-all duration-500">
            Contact us
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <div className="text-[#F6FCFF] bg-[#033059]">
        <div className="max-w-[800px] mt-[-14px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="font-bold p-1 text-[#57C8DA]">BUILD BETTER</p>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:py-2 ease-in-out duration-500">
            Our comprehensive and reliable services are tailored to meet your
            every need.
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-xl sm:text-xl text-md font-light my-4 text-[#57C8DA70]">
              Real estate development. Real estate management.
            </p>
          </div>
          <LinkScroll
            to="section1"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            <button className="bg-[#57C8DA] w-[150px] hover:scale-105 rounded-md font-medium my-6 mx-auto py-2 text-white transition-all duration-500">
              Get started
            </button>
          </LinkScroll>
        </div>
        <Section1 />
      </div>
    </>
  );
}
