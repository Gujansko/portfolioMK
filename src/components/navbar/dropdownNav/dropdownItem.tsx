import Image, { StaticImageData } from "next/image";
import { Variants, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function DropdownItem({
  icon,
  text,
  id,
  setDropdownState,
}: {
  icon: StaticImageData;
  text: string;
  id: string;
  setDropdownState: Dispatch<SetStateAction<boolean>>;
}) {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.li
      className="m-0 cursor-pointer p-3"
      variants={itemVariants}
      onClick={() => setDropdownState(false)}
    >
      <a
        className="flex items-center text-base capitalize text-slate-950"
        href={`${id}`}
      >
        <Image src={icon} alt={text} className="mr-2" />
        {text}
      </a>
    </motion.li>
  );
}
