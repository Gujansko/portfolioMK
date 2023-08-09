"use client";
import { useEffect, useState } from "react";

export default function useScreenWidth() {
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
}
