import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function DropdownContent({
  dropdownState,
  children,
}: {
  dropdownState: boolean;
  children: ReactNode;
}) {
  return (
    <motion.ul
      className="absolute right-2 flex flex-col bg-slate-50 text-slate-950"
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: "inset(10% 10% 90% 90% round 10px)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
      style={{ pointerEvents: dropdownState ? "auto" : "none" }}
    >
      {children}
    </motion.ul>
  );
}
