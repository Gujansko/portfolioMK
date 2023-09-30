import AnimateWrapper from "@/components/animations/animateWrapper";
import ExperienceCard from "../experienceCard/experienceCard";
import { Experience } from "../experience";
import { CalendarClock } from "lucide-react";
import setScrollingElementOffset from "@/utility/setScrollingElementOffset";

export default function ExperienceSliderContent({
  experiences,
}: {
  experiences: Experience[][];
}) {
  setScrollingElementOffset();
  return (
    <>
      {experiences.map((yearlyExperience, idx) => (
        <div
          className="flex min-w-full flex-wrap items-end justify-center gap-8 px-4 py-6 text-slate-50 sm:px-10 xl:px-32"
          key={idx}
        >
          {yearlyExperience.length === 0 ? (
            <AnimateWrapper
              animationOccurrence="whenInView"
              animationType="fadeInTop"
              duration={2}
              delay={0.3}
              className="flex min-w-full flex-col overflow-visible px-4 py-6 text-center text-2xl text-cyan-800 sm:px-10 xl:px-32"
            >
              <div
                className="flex flex-col items-center gap-4"
                id="scrolling-element"
              >
                <CalendarClock width={100} height={100} />
                <span className="capitalize text-slate-50">
                  Nothing happened this year so far
                </span>
              </div>
            </AnimateWrapper>
          ) : (
            <>
              {yearlyExperience.map((experience, idx) => (
                <AnimateWrapper
                  animationOccurrence="whenInView"
                  animationType="fadeInTop"
                  duration={2}
                  delay={0.3 * (idx + 1)}
                  key={idx}
                >
                  <ExperienceCard {...experience} />
                </AnimateWrapper>
              ))}
            </>
          )}
        </div>
      ))}
    </>
  );
}
