"use client";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function useAutoSlide(
  setCurrentSlide: Dispatch<SetStateAction<number>>,
  slides: StaticImageData[],
  autoPlay?: boolean,
  interval?: number
) {
  useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const autoSlide = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      interval ?? 3000
    );
    return () => clearInterval(autoSlide);
  }, []);
}
