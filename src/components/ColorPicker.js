import React from "react";

export default function ColorPicker({ onChangeColor, color }) {
  return (
    <input
      className="self-center hover:shadow-md duration-200"
      aria-label="Color Picker Button"
      type="color"
      onChange={(event) => onChangeColor(event.target.value)}
      value={color}
    ></input>
  );
}
