"use client";

import { useEffect } from "react";

export default function setScrollingElementOffset() {
  useEffect(() => {
    const setOffset = () => {
      const element = document.getElementById("experience-slider-wrapper");
      const sectionHeading = document.getElementById("experience-heading");
      if (element && sectionHeading) {
        const elementRect = element.getBoundingClientRect();
        const sectionHeadingRect = sectionHeading.getBoundingClientRect();

        let value = window.innerHeight - elementRect.bottom;
        const boundaryCheck =
          value < 0 &&
          sectionHeadingRect.top + sectionHeadingRect.bottom <
            window.innerHeight;
        if (boundaryCheck) {
          document.documentElement.style.setProperty(
            "--scrolling-element-offset",
            `${value}px`
          );
        }
      }
    };
    window.addEventListener("scroll", () => setOffset());

    return () => {
      window.removeEventListener("scroll", () => setOffset());
    };
  }, []);
}
