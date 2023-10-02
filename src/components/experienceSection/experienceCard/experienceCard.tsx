"use client";
import { Experience } from "@/components/experienceSection/experience";
import { useState } from "react";

export default function ExperienceCard(experienceDetails: Experience) {
  const { title, position, date, description, link, color } = experienceDetails;
  const [isFullyOpen, setIsFullyOpen] = useState(false);

  return (
    <div
      className={`card group relative m-8 flex max-w-lg flex-col items-center justify-start overflow-hidden rounded-xl bg-slate-50 p-8 before:absolute before:inset-x-[30%] before:inset-y-[-60%] before:h-[220%] before:w-[40%] before:animate-spin-slowest after:absolute after:inset-1 after:rounded-xl after:bg-slate-50 max-sm:cursor-pointer before:vsm:animate-spin-slow`}
      style={{ "--before-bg-color": color } as React.CSSProperties}
      onClick={() => setIsFullyOpen((prevValue) => !prevValue)}
    >
      <div className="z-10">
        <div
          className={`pb-2 text-3xl font-bold capitalize tracking-wide text-slate-950 underline decoration-4 underline-offset-8`}
          style={{ textDecorationColor: color }}
        >
          {title}
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            className="inline-block text-base text-slate-950 underline decoration-slate-950 decoration-2 underline-offset-[6px] transition-all duration-300 ease-in-out hover:scale-105 hover:pl-1"
          >
            Link to Project
          </a>
        ) : (
          <></>
        )}
        <div className="mb-4 text-base font-medium capitalize text-slate-800">
          {`${position}: ${date}`}
        </div>
        <div
          className={`text-lg font-medium text-slate-900 ${
            isFullyOpen ? "" : "max-sm:line-clamp-4"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
