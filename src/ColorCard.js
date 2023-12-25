import React from "react";

export default function ColorCard({ colorName, colorValue, onClick }) {
  return (
    <div onClick={() => onClick(colorValue)}>
      <div>{colorName}</div>
      <p>{colorValue}</p>
    </div>
  );
}
