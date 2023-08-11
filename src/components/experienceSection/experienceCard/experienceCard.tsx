import { experience } from "@/components/experienceSection/experience";

export default function ExperienceCard(experienceDetails: experience) {
  return (
    <div
      className={`relative m-8 flex max-w-lg flex-col items-center justify-start bg-slate-50 p-8 before:absolute before:h-[220%] before:w-[40%] ${experienceDetails.backgroundColor} group overflow-hidden rounded-xl p-4 before:inset-x-[30%] before:inset-y-[-60%] before:animate-spin-slowest after:absolute after:inset-1 after:rounded-xl after:bg-slate-50 before:vsm:animate-spin-slow`}
    >
      <div className="z-10">
        <div
          className={`text-3xl font-bold capitalize tracking-wide text-slate-950 underline decoration-transparent decoration-4 underline-offset-0 duration-200 ${experienceDetails.underlineColor} group-hover:text-4xl group-hover:underline-offset-4`}
        >
          {experienceDetails.title}
        </div>
        <div className="mb-4 text-base font-medium capitalize text-slate-800">
          {`${experienceDetails.position}: ${experienceDetails.date}`}
        </div>
        <div className="text-lg font-medium text-slate-900">
          {experienceDetails.description}
        </div>
      </div>
    </div>
  );
}
