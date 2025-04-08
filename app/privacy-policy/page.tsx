"use client";

import "@fontsource/montserrat/900.css";
import { useState } from "react";
import { texts } from "../Privacy-text";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function PrivacyPolicy() {
  // Initialize with the first key from the texts object
  const [selectedSection, setSelectedSection] = useState(Object.keys(texts)[0]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <div className="flex flex-col h-[calc(100vh-5rem)] md:h-screen mt-19.5">
      {/* Header Row */}
      <div className="bg-gray-800 text-white p-4 text-center font-bold">
        <h1 className="text-lg md:text-xl">Privacy Notice</h1>
        <p className="text-xs md:text-sm mt-2 font-normal">
          Thank you for trusting us with your personal information.
        </p>
        <p className="text-xs md:text-sm mt-2 font-normal">
          This Privacy Notice describes how IPICK collect, use, process and disclose your Personal Data through the use of IPICK’s mobile applications and websites (respectively “Apps” and “Websites”), as well as products, features and other services by IPICK in compliance with the provisions of REPUBLIC ACT NO. 10173 otherwise known as the “Data Privacy Act of 2012” and its Implementing Rules and Regulations.
        </p>
      </div>

      {/* Main Content Row */}
      <div className="flex flex-1 overflow-hidden">
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
            {Object.keys(texts).map((key) => (
              <li
                key={key}
                className={`p-2 cursor-pointer text-black text-base transition-transform transform ${selectedSection === key ? "bg-gray-300 scale-105 font-semibold" : "hover:scale-105"
                  }`}
                onClick={() => {
                  setSelectedSection(key);
                  setIsMobileMenuOpen(false); // Close menu on selection
                }}
              >
                {texts[key].title}
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
          <h1 className="text-lg font-bold mb-4">{texts[selectedSection].title}</h1>
          <div className="whitespace-pre-line text-sm">{texts[selectedSection].content}</div>
        </div>
      </div>
    </div>
  );
}
