import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="text-xs p-2" onClick={onClick}>
      {text}
    </button>
  );
}
