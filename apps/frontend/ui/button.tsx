'use client'

import React from "react";

export default function Button({
  children,
  onClick,
  variant,
  size,
  additionalClasses = "",
}: {
  children: React.ReactNode,
  onClick: (e:any) => void,
  variant: "primary" | "secondary",
  size: "sm" | "lg"
  additionalClasses?: string
}) {
  const variantClass =
    variant === "primary"
      ? "bg-black text-white"
      : "bg-white text-blue-500 border border-blue-500";
  const sizeClass = size === "sm" ? "px-10 py-2" : "px-40 py-4 rounded-xl mt-4";

  return (
    <button onClick={onClick} className={`${variantClass} ${sizeClass} py-2 rounded ${additionalClasses} cursor-pointer transition-colors hover:bg-gray-900 hover:text-white`}>
      {children}
    </button>
  );
}