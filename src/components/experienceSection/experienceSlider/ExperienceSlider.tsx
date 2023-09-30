"use client";
import { useEffect, useRef, useState } from "react";
import { Experience } from "../experience";
import fetchExperiences from "@/firebase/fetchExperiences";
import { Loader2, XCircle } from "lucide-react";
import SliderController from "./SliderController";
import { CREATION_YEAR } from "@/constants/constants";
import ExperienceSliderContent from "./ExperienceSliderContent";
import AnimateWrapper from "@/components/animations/animateWrapper";

export default function ExperienceSlider() {
  const [experiences, setExperiences] = useState<Experience[][]>([[]]);
  const maxYear = useRef(CREATION_YEAR);
  const [displayedYear, setDisplayedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isFetchingError, setIsFetchError] = useState<boolean>(false);

  useEffect(() => {
    fetchExperiences()
      .then((data) => {
        setExperiences(data.experiences);
        maxYear.current = data.maxYear;
      })
      .catch(() => {
        setIsFetchError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="relative overflow-hidden pb-12">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(displayedYear - CREATION_YEAR) * 100}%)`,
        }}
      >
        {isFetching ? (
          <AnimateWrapper
            animationType={"fadeInBottom"}
            duration={2}
            delay={0.3}
            animationOccurrence="whenInView"
            className="flex min-w-full flex-col items-center justify-end gap-12 px-4 py-6 text-center text-2xl text-cyan-800 sm:px-10 2xl:justify-center xl:px-32"
          >
            <Loader2 width={100} height={100} className="animate-spin" />
            <span className="text-slate-50">Loading</span>
          </AnimateWrapper>
        ) : (
          <></>
        )}
        {isFetchingError ? (
          <AnimateWrapper
            animationType={"fadeInBottom"}
            duration={2}
            delay={0.3}
            animationOccurrence="whenInView"
            className="flex min-w-full flex-col items-center justify-end gap-12 px-4 py-6 text-center text-2xl text-red-600 sm:px-10 2xl:justify-center xl:px-32"
          >
            <XCircle width={100} height={100} />
            <span className="text-slate-50">
              Couldn't load data please try again later
            </span>
          </AnimateWrapper>
        ) : (
          <></>
        )}
        {!isFetching && !isFetchingError ? (
          <ExperienceSliderContent experiences={experiences} />
        ) : (
          <></>
        )}
      </div>
      {!isFetching && !isFetchingError ? (
        <SliderController
          maxYear={maxYear}
          displayedYear={displayedYear}
          setDisplayedYear={setDisplayedYear}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
