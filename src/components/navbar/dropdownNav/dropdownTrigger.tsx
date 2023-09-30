import { motion } from "framer-motion";
import DropdownIcon from "./dropdownIcon";
import { Dispatch, SetStateAction } from "react";

export default function DropdownTrigger({
  dropdownState,
  setDropdownState,
}: {
  dropdownState: boolean;
  setDropdownState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.button
      onClick={() => setDropdownState((prevValue) => !prevValue)}
      className="w-10"
    >
      <DropdownIcon dropdownState={dropdownState}/>
    </motion.button>
  );
}
