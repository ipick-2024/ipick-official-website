"use client";
import "@fontsource/montserrat/700.css";
import { useState } from "react";
import { codeOfConduct } from "../coc";

export default function CodeOfConduct() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key: any) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div className="mx-auto px-8 py-8 bg-white h-full pt-30">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Code of Conduct
      </h1>

      <div className="space-y-4">
        {Object.entries(codeOfConduct).map(([key, section]) => (
          <div
            key={key}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {section.title}
              </h2>
              <span className="text-gray-600">
                {openSection === key ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>

            {openSection === key && (
              <div className="p-4 md:p-6 bg-white border-t border-gray-200">
                {section.content.map((item, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    {item.heading && (
                      <h3 className="text-md md:text-lg font-medium text-gray-700 mb-2">
                        {index + 1}. <span className="font-semibold">{item.heading}</span>
                      </h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Last updated: April 2025</p>
      </div>
    </div>
  );
}
