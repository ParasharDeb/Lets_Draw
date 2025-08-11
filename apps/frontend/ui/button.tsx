'use client'

import React from "react";

export default function Button({
  children,
  onClick,
  variant,
  size,
}: {
  children: React.ReactNode,
  onClick: (e:any) => void,
  variant: "primary" | "secondary",
  size: "sm" | "lg"
}) {
  const variantClass =
    variant === "primary"
      ? "bg-blue-500 text-white"
      : "bg-white text-blue-500 border border-blue-500";
  const sizeClass = size === "sm" ? "px-5" : "px-10";

  return (
    <button onClick={onClick} className={`${variantClass} ${sizeClass} py-2 rounded`}>
      {children}
    </button>
  );
}