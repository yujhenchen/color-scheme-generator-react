import React from "react";

export default function DropDown({ options, onSelect, selectedOption }) {
  return (
    <select
      className="w-1/3 p-2 text-base border-solid border-2 border-[#9CA3AF] rounded"
      onChange={(event) => onSelect(event.target.value)}
      value={selectedOption}
    >
      {options.map((option) => (
        <option
          key={option.value}
          className={`text-base ${
            selectedOption === option.value ? "font-bold" : ""
          }`}
          value={option.value}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
}