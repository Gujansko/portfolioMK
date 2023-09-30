import AnimateWrapper from "../animations/animateWrapper";
import ExperienceSlider from "./experienceSlider/ExperienceSlider";

export default async function ExperienceSection() {
  return (
    <section className="flex flex-col" id="experience">
      <AnimateWrapper
        animationOccurrence="whenInView"
        animationType="fadeInTop"
        duration={2}
        delay={0.5}
      >
        <h2
          className="py-4 text-center text-4xl font-bold tracking-wide text-slate-50 vsm:text-5xl xl:mb-14 xl:mt-0 xl:text-6xl"
          id="experience-heading"
        >
          Experience
        </h2>
      </AnimateWrapper>
      <ExperienceSlider />
    </section>
  );
}
