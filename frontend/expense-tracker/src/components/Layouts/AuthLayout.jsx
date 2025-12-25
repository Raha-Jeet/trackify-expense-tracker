 
 import React, { useEffect, useState } from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  const text = "Trackify";
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // Total animation duration = letters count × delay + animation time
    const totalTime = text.length * 150 + 600;
    const timer = setTimeout(() => setAnimationDone(true), totalTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex">
      {/* Left Section */}
      <div
        className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-green-200"
         
      >
        {/* Animated Logo */}
        <h1
          className={`text-4xl font-logo font-extrabold mb-14 tracking-wide drop-shadow-lg flex gap-1 transition-all duration-700`}
          style={{
            letterSpacing: animationDone ? "-4px" : "0px", // reduce spacing after animation
            color: "#253D2C",
            
          }}
        >
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="opacity-0 animate-drop"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {children}
      </div>

      {/* Right Section */}
      <div
        className="hidden md:block w-[40vw] h-screen bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative"
        style={{ backgroundColor: "#2E6F40" }}
      >
        <div
          className="w-48 h-48 rounded-[40px] absolute -top-7 -left-5"
          style={{ backgroundColor: "#68BA7F" }}
        />
        <div
          className="w-48 h-56 rounded-[40px] border-[20px] absolute top-[30%] -right-10"
          style={{ borderColor: "#CFFFDC" }}
        />
        <div
          className="w-48 h-48 rounded-[40px] absolute -bottom-7 -left-5"
          style={{ backgroundColor: "#253D2C" }}
        />

        {/* Card */}
        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="2,356,000"
            color="#2E6F40"
          />
        </div>

        {/* Image */}
        <img
          src={CARD_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg"
          style={{ boxShadow: "0 4px 20px rgba(104, 186, 127, 0.3)" }}
        />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes drop {
            0% { transform: translateY(-100px); opacity: 0; }
            80% { transform: translateY(10px); opacity: 1; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-drop {
            animation: drop 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div
      className="flex gap-6 bg-white p-4 rounded-xl shadow-md border z-10"
      style={{
        boxShadow: "0 4px 12px rgba(104, 186, 127, 0.15)",
        borderColor: "#68BA7F",
      }}
    >
      {/* Icon Circle */}
      <div
        className="w-12 h-12 flex items-center justify-center text-[26px] text-white rounded-full drop-shadow-xl"
        style={{
          backgroundColor: color,
          boxShadow: "0 2px 10px rgba(46, 111, 64, 0.4)",
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        {/* Label - bigger & bold */}
        <h6
          className="text-sm font-semibold mb-1  "
          style={{ color: "#253D2C" }}
        >
          {label}
        </h6>

        {/* Value - bigger & bold */}
       <span className="text-[24px] font-bold text-green-900">
  <span style={{ fontFamily: "Inter, sans-serif" }}>₹</span> {value}
</span>


      </div>
    </div>
  );
};

 

export default AuthLayout;
