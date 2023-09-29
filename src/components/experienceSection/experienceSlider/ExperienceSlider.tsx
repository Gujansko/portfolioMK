"use client";
import { useEffect, useRef, useState } from "react";
import { Experience } from "../experience";
import fetchExperiences from "@/firebase/fetchExperiences";
import { Loader2, XCircle } from "lucide-react";
import SliderController from "./SliderController";
import { CREATION_YEAR } from "@/constants/constants";
import ExperienceSliderContent from "./ExperienceSliderContent";

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
        console.log(data.experiences);
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
          <div className="flex min-w-full flex-col items-center justify-center gap-12 px-4 py-6 text-2xl text-cyan-800 sm:px-10 xl:px-32">
            <Loader2 width={100} height={100} className="animate-spin" />
            <span className="text-slate-50">Loading</span>
          </div>
        ) : (
          <></>
        )}
        {isFetchingError ? (
          <div className="flex min-w-full flex-col items-center justify-center gap-12 px-4 py-6 text-2xl text-red-600 sm:px-10 xl:px-32">
            <XCircle />
            <span className="text-slate-50">
              Couldn't load data please try again later
            </span>
          </div>
        ) : (
          <></>
        )}
        {isFetching === false ? (
          <ExperienceSliderContent experiences={experiences} />
        ) : (
          <></>
        )}
      </div>
      <SliderController
        maxYear={maxYear}
        displayedYear={displayedYear}
        setDisplayedYear={setDisplayedYear}
      />
    </div>
  );
}
