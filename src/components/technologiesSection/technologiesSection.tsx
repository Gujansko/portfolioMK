"use client";
import Image from "next/image";
import { technologies } from "./technologies";
import AnimateWrapper from "../animations/animateWrapper";

export default function TechnologiesSection() {
  return (
    <div
      className="bg-slate-50 p-10 text-center text-slate-950 xl:p-20"
      id="technologies"
    >
      <AnimateWrapper
        animationType="fadeInBottom"
        animationOccurence="whenInView"
        duration={2}
        delay={0.5}
      >
        <h1 className="pb-16 text-4xl font-bold tracking-wide vsm:text-5xl xl:text-6xl">
          Used Technologies
        </h1>
      </AnimateWrapper>
      <div className="flex flex-wrap items-center justify-center gap-20">
        {technologies.map((technology, idx) => (
          <AnimateWrapper
            animationType="fadeInBottom"
            animationOccurence="whenInView"
            duration={2}
            delay={0.1 * (idx + 1)}
            key={idx}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <Image src={technology.image} width={80} height={80} alt="" />
              <p className="text-2xl font-medium tracking-wider">
                {technology.name}
              </p>
            </div>
          </AnimateWrapper>
        ))}
      </div>
    </div>
  );
}
