import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-white dark:bg-[#3D4B60] text-black dark:text-white text-xs p-2 border-solid border-2 border-[#9CA3AF] rounded hover:shadow-md duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
