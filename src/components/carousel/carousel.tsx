"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import useAutoSlide from "@/utility/useAutoSlide";

export default function Carousel({
  slides,
  autoPlay,
  interval,
}: {
  slides: StaticImageData[];
  autoPlay?: boolean;
  interval?: number;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useAutoSlide(setCurrentSlide, slides, autoPlay, interval);

  return (
    <div className="relative max-w-xl overflow-x-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <Image src={slide} alt={"slide"} key={idx} />
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <div
            className={`h-4 w-4 cursor-pointer rounded-full bg-cyan-800 transition-all duration-500 ease-in-out ${
              currentSlide === idx ? "p-3" : "bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(idx)}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}
