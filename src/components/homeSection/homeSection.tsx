import Image from "next/image";
import face from "public/homeSection/face.png";
import AnimateWrapper from "../animations/animateWrapper";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="relative flex min-h-screen flex-wrap items-center justify-around text-center uppercase tracking-widest"
    >
      <div className="absolute inset-0 -z-10 bg-slate-50 [clip-path:polygon(0%_0%,0%_76%,65%_0%)]"></div>
      <div>
        <h1 className="mb-3 text-7xl font-bold text-slate-50 mix-blend-difference transition-all duration-500 vsm:text-8xl sm:text-9xl">
          Hello
        </h1>
        <h1 className="mb-3 text-6xl font-medium text-slate-50 mix-blend-difference vsm:text-7xl sm:text-8xl">
          My Name is
        </h1>
      </div>
      <div className="group relative">
        <AnimateWrapper
          animationOccurence="whenInView"
          animationType="fadeInBottom"
          duration={2}
          delay={0.3}
        >
          <Image
            src={face}
            alt="face"
            priority={true}
            className="mx-auto translate-y-10 scale-90 rounded-full transition-all duration-700 ease-in-out group-hover:-translate-y-4 vsm:group-hover:-translate-y-6 3xl:group-hover:-translate-y-10 3xl:group-hover:scale-110"
          />
        </AnimateWrapper>
        <div className="overflow-hidden">
          <AnimateWrapper
            animationOccurence="whenInView"
            animationType="fadeInBottom"
            duration={2}
            delay={0.6}
          >
            <h2 className="translate-x-full cursor-default text-xl font-medium text-slate-50 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 tiny:text-2xl vsm:text-3xl xl:text-4xl">
              CS Student at Lodz University of Technology
            </h2>
            <h2 className="mb-10 cursor-default text-2xl font-bold italic text-slate-50 transition-all duration-700 ease-in-out group-hover:translate-y-4 tiny:text-3xl vsm:text-4xl xl:text-5xl">
              Mateusz Kłos
            </h2>
          </AnimateWrapper>
        </div>
      </div>
    </div>
  );
}
