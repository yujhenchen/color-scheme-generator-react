import React from "react";

export default function ColorPicker({ onChangeColor, color }) {
  return (
    <div className="hover:shadow-md duration-200 self-stretch bg-[#D1D5DB]">
      <input
        className="h-full"
        aria-label="Color Picker Button"
        type="color"
        onChange={(event) => onChangeColor(event.target.value)}
        value={color}
      ></input>
    </div>
  );
}
