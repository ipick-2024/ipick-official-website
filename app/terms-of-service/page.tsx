"use client";

import "@fontsource/montserrat/900.css";
import { useState } from "react";
import { tos } from "../TOS-text";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function PrivacyPolicy() {
  // Initialize with the first key from the tos object
  const [selectedSection, setSelectedSection] = useState<keyof typeof tos>(Object.keys(tos)[0] as keyof typeof tos);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen pt-19.5"
      style={{ backgroundImage: "url('/assets/car.png')" }}
    >
      {/* Header */}
      <header className="bg-green-800 text-white text-center py-4">
        <h1 className="text-xl font-bold">Terms of Service</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Column */}
        <div
          className={`absolute md:relative z-10 bottom-0 top-0 bg-gray-300 p-4 overflow-y-auto transition-transform transform h-full ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:w-max mt-20 md:mt-0`}
        >
          <FaAngleLeft
            className="md:hidden mb-4 text-black cursor-pointer ml-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <ul>
            {Object.keys(tos).map((key) => (
              <li
                key={key}
                className={`p-2 cursor-pointer text-black text-base transition-transform transform ${selectedSection === key ? "bg-gray-300 scale-105 font-semibold" : "hover:scale-105"
                  }`}
                onClick={() => {
                  setSelectedSection(key as keyof typeof tos);
                  setIsMobileMenuOpen(false); // Close menu on selection
                }}
              >
                {tos[key as keyof typeof tos].title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-full p-4 overflow-y-auto bg-gray-100 text-black">
          <FaAngleRight
            className="md:hidden mb-4 text-black cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <h1 className="text-lg font-bold mb-4">{tos[selectedSection].title}</h1>
          <div className="whitespace-pre-line text-sm">{tos[selectedSection].content}</div>
        </div>
      </div>
    </div>
  );
}
