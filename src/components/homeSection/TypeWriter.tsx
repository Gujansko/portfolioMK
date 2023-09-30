"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import textSlideContents from "./textSlideContents";

export default function TypeWriter() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: textSlideContents,
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}
