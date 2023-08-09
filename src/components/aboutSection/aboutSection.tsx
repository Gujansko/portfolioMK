import Carousel from "../carousel/carousel";
import { slides } from "@/components/aboutSection/slidesContent";
import AnimateWrapper from "../animations/animateWrapper";
import { textContent } from "./textContent";

export default function AboutSection() {
  return (
    <div className="flex min-h-screen bg-slate-50" id="about">
      <div className="mx-auto my-8 grid w-[90%] grid-cols-1 justify-items-center 2xl:m-auto 2xl:grid-cols-2 2xl:items-center">
        <div className="w-full text-center 2xl:ml-14 2xl:text-left">
          <AnimateWrapper
            animationOccurence="whenInView"
            animationType="fadeInLeft"
            duration={2}
            delay={0}
          >
            <h1 className="text-4xl font-bold tracking-wide text-slate-950 underline decoration-cyan-800 decoration-4 underline-offset-4 vsm:text-5xl lg:text-6xl 2xl:mt-0">
              About
            </h1>
          </AnimateWrapper>
          <div className="mt-4 text-xl font-medium text-slate-900">
            {textContent.map((text, idx) => (
              <AnimateWrapper
                animationOccurence="whenInView"
                animationType="fadeInLeft"
                duration={2}
                delay={0.1 * (idx + 1)}
                key={idx}
              >
                <p
                  className={`${idx === textContent.length - 1 ? "" : "mb-4"}`}
                >
                  {text}
                </p>
              </AnimateWrapper>
            ))}
          </div>
        </div>
        <AnimateWrapper
          animationOccurence="whenInView"
          animationType="fadeInRight"
          duration={2}
          delay={0.8}
        >
          <Carousel slides={slides} autoPlay={true} />
        </AnimateWrapper>
      </div>
    </div>
  );
}
