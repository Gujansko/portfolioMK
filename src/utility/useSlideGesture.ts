"use client";
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

const useSlideGesture = (
  setCurrentSlide: Dispatch<SetStateAction<number>>,
  setIsTooltipVisible: Dispatch<SetStateAction<boolean>>,
  isTooltipVisible: boolean,
  mouseDownPixel: MutableRefObject<number>,
  elementId: string,
  length: number
) => {
  useEffect(() => {
    const handleSlideGesture = (e: MouseEvent | TouchEvent) => {
      const mousePosition =
        e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX;

      if (mousePosition > mouseDownPixel.current) {
        if (isTooltipVisible) setIsTooltipVisible(false);
        setCurrentSlide((prev) => (prev - 1 + length) % length);
      } else if (mousePosition < mouseDownPixel.current) {
        if (isTooltipVisible) setIsTooltipVisible(false);
        setCurrentSlide((prev) => (prev + 1) % length);
      }
      const element = document.getElementById(elementId);
      if (element) element.style.cursor = "grab";
    };

    const setRefValue = (e: MouseEvent | TouchEvent) => {
      const element = document.getElementById(elementId);
      if (element) element.style.cursor = "grabbing";
      if (e instanceof MouseEvent) {
        mouseDownPixel.current = e.clientX;
      } else {
        mouseDownPixel.current = e.touches[0].clientX;
      }
    };

    const element = document.getElementById(elementId);

    element?.addEventListener("mousedown", (e) => setRefValue(e));
    element?.addEventListener("mouseup", (e) => {
      handleSlideGesture(e);
    });
    element?.addEventListener("touchstart", (e) => setRefValue(e));
    element?.addEventListener("touchend", (e) => handleSlideGesture(e));

    return () => {
      element?.removeEventListener("mousedown", (e) => setRefValue(e));
      element?.removeEventListener("mouseup", (e) => handleSlideGesture(e));
      element?.removeEventListener("touchstart", (e) => setRefValue(e));
      element?.removeEventListener("touchend", (e) => handleSlideGesture(e));
    };
  }, []);
};

export default useSlideGesture;
