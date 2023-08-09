import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function DropdownTrigger({
  setDropdownState,
}: {
  setDropdownState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.button
      onClick={() => setDropdownState((prevValue) => !prevValue)}
      className="w-10"
    >
      <div className="fill-slate-50 transition-all duration-200 hover:scale-110">
        <Menu />
      </div>
    </motion.button>
  );
}
