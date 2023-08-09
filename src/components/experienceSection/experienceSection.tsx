import ExperienceCard from "../experienceCard/experienceCard";
import AnimateWrapper from "../animations/animateWrapper";
import { experiences } from "./experience";

export default async function ExperienceSection() {
  return (
    <div
      className="flex min-h-screen flex-col flex-wrap justify-start"
      id="experience"
    >
      <div className="lgw:mt-0 mb-20 mt-10 text-center text-4xl font-bold tracking-wide text-slate-50 vsm:text-5xl lg:mb-28 lg:text-6xl">
        <AnimateWrapper
          animationOccurence="whenInView"
          animationType="fadeInTop"
          duration={2}
          delay={0.5}
        >
          <h1>Experience</h1>
        </AnimateWrapper>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        {experiences.map((experience, idx) => (
          <AnimateWrapper
            animationOccurence="whenInView"
            animationType="fadeInTop"
            duration={2}
            delay={0.8}
            key={idx}
          >
            <ExperienceCard {...experience} />
          </AnimateWrapper>
        ))}
      </div>
    </div>
  );
}
