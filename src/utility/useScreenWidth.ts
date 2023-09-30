"use client";
import { useEffect, useState } from "react";
import setCustomProperty from "./setCustomProperty";

export default function useScreenWidth() {
  function handleResize() {
    setCustomProperty("navbar", "--nav-height");
    setScreenWidth(window.innerWidth);
  }
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setCustomProperty("navbar", "--nav-height");
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
}
