import React from "react";

export default function TextButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
