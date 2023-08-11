"use client";
import { useEffect, useState } from "react";
import setScrollPadding from "./setScrollPadding";

export default function useScreenWidth() {
  function handleResize() {
    setScrollPadding();
    setScreenWidth(window.innerWidth);
  }
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScrollPadding();
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
}
