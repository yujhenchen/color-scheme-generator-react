import React from "react";

export default function Toast({ text }) {
  return (
    <div className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      {text}
    </div>
  );
}
