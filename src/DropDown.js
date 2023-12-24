import React from "react";

export default function DropDown({ options }) {
  return (
    <select>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  );
}
