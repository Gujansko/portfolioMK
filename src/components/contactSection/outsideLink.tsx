import React from "react";

export default function OutsideLink({
  href,
  containsImage,
  children,
  underlineColor,
}: {
  href: string;
  containsImage: boolean;
  children: React.ReactNode;
  underlineColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`flex items-center justify-center text-2xl font-medium underline ${underlineColor} decoration-2 underline-offset-8 transition-all duration-200 hover:scale-110 ${
        containsImage ? "flex-wrap gap-1" : "inline-flex"
      }`}
    >
      {children}
    </a>
  );
}
