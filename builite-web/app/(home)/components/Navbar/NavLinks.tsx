"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { NavbarLinkProps, NavbarBtnProps } from "../../interface/Navbar";

export const NavLink: React.FC<NavbarLinkProps> = ({ href, label, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`my-3 block h-8 ${
        isActive ? "text-blue-500 border-b border-blue-500" : "text-blue-900"
      } hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-150`}
    >
      <span className="flex flex-row justify-start">
        {icon && <span className="mr-2 text-sm">{icon}</span>}
        {label}
      </span>
    </Link>
  );
};

export const NavButton: React.FC<NavbarBtnProps> = ({ href, label, icon }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 bg-white border border-gray-200 rounded-md text-blue-900 shadow-md"
    >
      <span className="flex flex-row justify-start items-center">
        {label}
        {icon && <span className="ml-2 text-sm">{icon}</span>}
      </span>
    </Link>
  );
};
