"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Button from "../Buttons/Buttons";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex fixed w-screen justify-between items-center h-28 max-w-[1840px] mx-auto px-4 text-blue-900 bg-white">
      <div className="w-full flex flex-row justify-between items-center">
        <ul className="hidden md:flex">
          <li className="p-4">Buy</li>
          <li className="p-4">Sell</li>
          <li className="p-4">Rent</li>
          <li className="p-4">Build</li>
          <li className="p-4">Agent Finder</li>
        </ul>
        <div>
          <img src={"./assets/imgs/logolight.svg"} className={"w-40"} />
        </div>
        <ul className="hidden md:flex">
          <li className="p-4">Manage Rentals</li>
          <li className="p-4">Loans</li>
          <li className="p-4">About Us</li>
          <li className="p-4">
            {/* <Button label={"Sign in"} link={"/login"} icon={<FaUserCircle />} /> */}
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className="block md:hidden z-20 fixed right-4">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "flex flex-col fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-white transition-all ease-in-out duration-300"
            : "fixed top-[-500em]"
        }
      >
        <h1 className="w-auto text-2xl font-bold mx-auto my-4">Menu</h1>

        <ul className="flex flex-col pt-14 uppercase p-4 align-middle">
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">Services</li>
          <li className="p-4 border-b border-gray-600">About Us</li>
        </ul>

        <ul className="flex flex-col pt-24 uppercase p-4 align-middle">
          <li className="p-4">Get in touch</li>
        </ul>
      </div>
    </div>
  );
}
