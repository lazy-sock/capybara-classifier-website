import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
  label: string;
  options: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:hover:bg-darker-black hover:bg-green-50 focus:outline-none rounded-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 dark:fill-white fill-black"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>

      </button>

      {isOpen && (
        <div className="ring-opacity-5 absolute mt-2 right-0 rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-none z-50">
          <div className="py-1 space-y-1 px-2">
            {options.map((option, index) => (
              <div key={index} className="w-full">
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
