"use client";
import React, { useState } from "react";

interface SearchbarProps {
  htmlFor: string;
  label: string;
  handleSearch: (value: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  htmlFor,
  label,
  handleSearch,
}) => {
  const svgIcon = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    );
  };

  return (
    <>
      <div className="w-full flex flex-row justify-between align-middle relative mr-4">
        <input
          type="text"
          required={true}
          placeholder={label}
          onChange={(e) => handleSearch(e.target.value)}
          autoComplete="off"
          className="block w-full p-4 text-md text-white border border-gray-300 rounded-lg bg-transparent focus:ring-bg-[#57C8DA] focus:border-bg-[#57C8DA]"
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none text-lg px-4 py-2 transition-all ease-in duration-150"
        >
          {svgIcon()}
        </button>
      </div>
    </>
  );
};
