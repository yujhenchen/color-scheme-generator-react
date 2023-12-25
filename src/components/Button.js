import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="text-xs p-2 border-solid border-2 border-[#9CA3AF] rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
