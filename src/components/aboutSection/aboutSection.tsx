import Carousel from "../carousel/carousel";
import { slides } from "@/components/aboutSection/slidesContent";
import AnimateWrapper from "../animations/animateWrapper";
import { textContent } from "./textContent";

export default function AboutSection() {
  return (
    <section className="flex bg-slate-50" id="about">
      <div className="mx-auto my-8 grid w-[90%] grid-cols-1 justify-items-center 2xl:my-0 2xl:grid-cols-2 2xl:items-center">
        <div className="w-full text-center 2xl:ml-14 2xl:text-left">
          <AnimateWrapper
            animationOccurrence="whenInView"
            animationType="fadeInLeft"
            duration={2}
            delay={0}
          >
            <h2 className="text-4xl font-bold tracking-wide text-slate-950 vsm:text-5xl lg:text-6xl">
              About
            </h2>
          </AnimateWrapper>
          <div>
            {textContent.map((text, idx) => (
              <AnimateWrapper
                animationOccurrence="whenInView"
                animationType="fadeInLeft"
                duration={2}
                delay={0.1 * (idx + 1)}
                key={idx}
                className="mt-4 text-xl font-medium text-slate-900"
              >
                <p className="last:mb-4">{text}</p>
              </AnimateWrapper>
            ))}
          </div>
        </div>
        <AnimateWrapper
          animationOccurrence="whenInView"
          animationType="fadeInBottom"
          duration={2}
          delay={0.8}
        >
          <Carousel slides={slides} autoPlay={false} />
        </AnimateWrapper>
      </div>
    </section>
  );
}
