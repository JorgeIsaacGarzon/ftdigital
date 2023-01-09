import React from "react";

export default function Button({
  children,
  onClick,
  className,
  disabled = false,
}) {
  return (
    <button
      className={`w-16 h-8 rounded-md bg-green-700 hover:bg-green-500 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
