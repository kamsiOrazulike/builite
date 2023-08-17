"use client";
import { DropdownMenuProps, Option } from "../../interface/Dropdown";
import React, { useState, useEffect, useRef } from "react";

export const NavDropdown: React.FC<DropdownMenuProps> = ({
  options,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    if (option.action) {
      option.action();
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        tabIndex={0}
        role="button"
        className="my-3 block justify-center w-full text-md font-medium cursor-pointer hover:text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-150"
        onClick={handleDropdownToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleDropdownToggle();
          }
        }}
      >
        {label}
      </div>
      {isOpen && (
        <div className="absolute w-40 z-40 py-2 mx-auto flex flex-col justify-center items-center shadow-md rounded-md bg-white">
          {options.map((option: Option) => (
            <div
              key={option.id}
              tabIndex={0}
              role="button"
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleOptionClick(option);
                }
              }}
              className="w-full px-6 py-2 text-sm text-gray-800 border-b border-gray-200 hover:text-blue-500 transition-all duration-200 cursor-pointer"
            >
              <div className="w-full my-1 flex flex-row items-center">
                <div className="mx-2">{option.icon}</div>
                {option.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
