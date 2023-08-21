import { motion } from "framer-motion";
import DropdownIcon from "./dropdownIcon";

export default function DropdownTrigger({
  dropdownState,
  setDropdownState,
}: {
  dropdownState: boolean;
  setDropdownState: React.Dispatch<React.SetStateAction<boolean>>;
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
