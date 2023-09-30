import AnimateWrapper from "@/components/animations/animateWrapper";
import ExperienceCard from "../experienceCard/experienceCard";
import { Experience } from "../experience";
import { CalendarClock } from "lucide-react";

export default function ExperienceSliderContent({
  experiencesInYear,
}: {
  experiencesInYear: Experience[];
}) {
  return (
    <>
      {experiencesInYear.length === 0 ? (
        <AnimateWrapper
          animationOccurrence="whenInView"
          animationType="fadeInTop"
          duration={2}
          delay={0.3}
          className="flex min-w-full flex-col items-center justify-center gap-4 overflow-visible px-4 py-6 text-center text-2xl text-cyan-800 sm:px-10 xl:px-32"
        >
          <CalendarClock width={100} height={100} />
          <span className="capitalize text-slate-50">
            Nothing happened this year so far
          </span>
        </AnimateWrapper>
      ) : (
        <>
          {experiencesInYear.map((experience, idx) => {
            return (
              <AnimateWrapper
                animationOccurrence="whenInView"
                animationType="fadeInTop"
                duration={2}
                delay={0.3 * (idx + 1)}
                key={idx}
              >
                <ExperienceCard {...experience} />
              </AnimateWrapper>
            );
          })}
        </>
      )}
    </>
  );
}
