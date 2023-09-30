import { Dispatch, SetStateAction, MutableRefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { CREATION_YEAR } from "@/constants/constants";
import scrollToId from "@/utility/scrollToId";

export default function SliderController({
  maxYear,
  displayedYear,
  setDisplayedYear,
}: {
  maxYear: MutableRefObject<number>;
  displayedYear: number;
  setDisplayedYear: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 p-2 text-lg">
      <ChevronLeft
        width={30}
        height={30}
        className={`cursor-pointer transition-all duration-500 ease-in-out hover:animate-swing-left ${
          displayedYear === CREATION_YEAR
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100"
        }`}
        onClick={() => {
          setDisplayedYear((prevValue) => prevValue - 1);
          scrollToId("experience-heading");
        }}
      />
      <motion.span
        key={displayedYear}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
      >
        {displayedYear}
      </motion.span>
      <ChevronRight
        width={30}
        height={30}
        className={`cursor-pointer transition-all duration-500 ease-in-out hover:animate-swing-right ${
          displayedYear === maxYear.current
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100"
        }`}
        onClick={() => {
          setDisplayedYear((prevValue) => prevValue + 1);
          scrollToId("experience-heading");
        }}
      />
    </div>
  );
}
