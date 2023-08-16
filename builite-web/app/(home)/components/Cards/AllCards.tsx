"use client";
import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  link: string;
  href: string;
  thumbnail?: string;
  className?: string;
}

export const CardWithLink: React.FC<CardProps> = ({
  title,
  description,
  link,
  href,
  thumbnail,
  className,
}) => {
  return (
    <div className="w-full flex flex-col justify-between bg-white border border-gray-200 shadow-md m-4 rounded-lg text-left hover:scale-[1.05] transition-all duration-150">
      <div className="p-2 mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-md h-60 w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start py-8 px-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={href}
          className={`bg-blue-400 hover:bg-blue-500 transition-all duration-150 text-white px-6 py-2 rounded-md ${className}`}
        >
          {link}
        </a>
      </div>
    </div>
  );
};
