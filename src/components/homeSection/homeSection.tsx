import Image from "next/image";
import face from "public/homeSection/face.png";
import AnimateWrapper from "../animations/animateWrapper";
import TypeWriter from "./TypeWriter";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-around text-center uppercase tracking-widest lg:flex-row"
    >
      <div className="absolute inset-0 -z-10 bg-slate-50 [clip-path:polygon(0%_0%,0%_78%,62%_0%)]" />
      <div>
        <h2 className="text-7xl font-bold text-slate-50 mix-blend-difference transition-all duration-500 vsm:text-8xl sm:text-9xl">
          Hello
        </h2>
      </div>
      <div>
        <AnimateWrapper
          animationOccurrence="whenInView"
          animationType="fadeInBottom"
          duration={2}
          delay={0.3}
        >
          <Image
            src={face}
            alt="face"
            priority={true}
            className="mx-auto max-w-[90%] rounded-full"
          />
        </AnimateWrapper>
        <AnimateWrapper
          animationOccurrence="whenInView"
          animationType="fadeInBottom"
          duration={2}
          delay={0.6}
        >
          <h2 className="h-[200px] max-w-[500px] px-4 pt-8 text-center text-2xl font-bold italic text-slate-50 tiny:text-3xl vsm:text-4xl xl:text-5xl">
            <TypeWriter />
          </h2>
        </AnimateWrapper>
      </div>
    </section>
  );
}
