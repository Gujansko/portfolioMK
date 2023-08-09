import ExperienceCard from "../experienceCard/experienceCard";
import AnimateWrapper from "../animations/animateWrapper";
import { experiences } from "./experience";

export default async function ExperienceSection() {
  return (
    <div
      className="flex min-h-screen flex-wrap items-center justify-around"
      id="experience"
    >
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
  );
}
