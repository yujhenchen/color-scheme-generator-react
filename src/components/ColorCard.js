import React from "react";

export default function ColorCard({ colorName, colorValue, onClick }) {
  return (
    <div
      onClick={() => onClick(colorValue)}
      className="relative grow hover:scale-105 hover:z-10 hover:shadow-lg duration-200"
    >
      <div style={{ backgroundColor: colorValue }} className="h-full"></div>
      <p className="h-12 absolute bottom-0 left-0 bg-white dark:bg-[#1F2937] text-black dark:text-white w-full text-xs flex items-center justify-center">
        {colorName}
      </p>
    </div>
  );
}
