import React from "react";

export default function ColorCard({ colorName, colorValue, onClick }) {
  return (
    <div onClick={() => onClick(colorValue)} className="color-card">
      <div
        style={{ backgroundColor: colorValue }}
        className="color-card-box"
      ></div>
      <p>{colorName}</p>
    </div>
  );
}
