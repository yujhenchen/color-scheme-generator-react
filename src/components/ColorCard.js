import React from "react";

export default function ColorCard({ colorName, colorValue, onClick }) {
  return (
    <div
      onClick={() => onClick(colorValue)}
      className="relative grow hover:scale-105 hover:z-10 duration-200"
    >
      <div style={{ backgroundColor: colorValue }} className="h-full"></div>
      <p className="h-12 absolute bottom-0 left-0 bg-white w-full text-center text-xs">
        {colorName}
      </p>
    </div>
  );
}
