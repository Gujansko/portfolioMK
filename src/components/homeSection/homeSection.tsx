import Image from "next/image";
import face from "public/homeSection/f1.jpg";
import AnimateWrapper from "../animations/animateWrapper";
import TypeWriter from "./TypeWriter";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-around text-center uppercase tracking-widest lg:flex-row"
    >
      <div className="absolute inset-0 -z-10 bg-slate-50 [clip-path:polygon(0%_0%,0%_78%,62%_0%)]" />
      <div>
        <h2 className="pt-8 text-7xl font-bold text-slate-50 mix-blend-difference transition-all duration-500 vsm:text-8xl sm:text-9xl">
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
            className="mx-auto max-w-[70%] [clip-path:polygon(120px_0,100%_0,100%_calc(100%-120px),calc(100%-120px)_100%,0_100%,0_120px)]"
          />
        </AnimateWrapper>
        <AnimateWrapper
          animationOccurrence="whenInView"
          animationType="fadeInBottom"
          duration={2}
          delay={0.6}
        >
          <h2 className="h-[200px] max-w-[492px] px-4 pt-8 text-center text-xl font-bold italic text-slate-50 tiny:text-3xl vsm:text-4xl xl:text-5xl">
            <TypeWriter />
          </h2>
        </AnimateWrapper>
      </div>
    </section>
  );
}
