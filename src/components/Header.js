import React from "react";

export default function Header({ children }) {
  return (
    <header className="w-full flex justify-center shadow-lg bg-white dark:bg-[#1F2937] px-3.5 py-6 space-x-2">
      {children}
    </header>
  );
}
