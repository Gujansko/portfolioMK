"use client";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import useAutoSlide from "@/utility/useAutoSlide";
import useSlideGesture from "@/utility/useSlideGesture";
import { Hand } from "lucide-react";

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
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);
  useAutoSlide(setCurrentSlide, slides, autoPlay, interval);
  const mouseDownPixel = useRef(0);
  useSlideGesture(
    setCurrentSlide,
    setIsTooltipVisible,
    isTooltipVisible,
    mouseDownPixel,
    "carousel",
    slides.length
  );

  return (
    <div className="relative max-w-xl overflow-hidden">
      <div
        className="flex cursor-grab transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        id="carousel"
      >
        {slides.map((slide, idx) => (
          <Image src={slide} alt={"slide"} key={idx} draggable="false" />
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
      <div
        className={`absolute right-4 top-4 flex -rotate-[15deg] flex-col items-center justify-center gap-1 overflow-hidden rounded-full border-4 border-cyan-800 bg-slate-50 p-4 text-center font-semibold text-cyan-800 transition-all duration-500 ease-in-out sm:top-14 ${
          isTooltipVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span>I'm slidable</span>
        <Hand />
      </div>
    </div>
  );
}
