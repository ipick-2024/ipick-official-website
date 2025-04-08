"use client";

import { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 500);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-100 flex items-center justify-center transition-opacity duration-500 z-50 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <div className="scene">
        <div className="cube animate-spinCube">
          <div className="face front bg-red-500"></div>
          <div className="face back bg-orange-500"></div>
          <div className="face right bg-green-500"></div>
          <div className="face left bg-yellow-500"></div>
          <div className="face top bg-blue-500"></div>
          <div className="face bottom bg-purple-500"></div>
        </div>
      </div>

      <style jsx>{`
        .scene {
          width: 50px;
          height: 50px;
          perspective: 600px;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }
        .face {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 2px solid #fff;
          opacity: 0.9;
        }
        .front  { transform: translateZ(25px); }
        .back   { transform: rotateY(180deg) translateZ(25px); }
        .right  { transform: rotateY(90deg) translateZ(25px); }
        .left   { transform: rotateY(-90deg) translateZ(25px); }
        .top    { transform: rotateX(90deg) translateZ(25px); }
        .bottom { transform: rotateX(-90deg) translateZ(25px); }

        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        .animate-spinCube {
          animation: spinCube 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
