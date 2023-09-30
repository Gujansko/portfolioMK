"use client";
import DropdownNav from "../dropdownNav/dropdownNav";
import useScreenWidth from "@/utility/useScreenWidth";
import NavLink from "../navLink";

export default function Sections() {
  const screenWidth = useScreenWidth();

  return (
    <div>
      {screenWidth > 640 ? (
        <div className="flex">
          <NavLink animationType="fadeInTop" duration={0.4} delay={0.1}>
            <a href="#about" className="text-xl">
              About
            </a>
          </NavLink>
          <NavLink animationType="fadeInTop" duration={0.4} delay={0.2}>
            <a href="#experience" className="text-xl">
              Experience
            </a>
          </NavLink>
          <NavLink animationType="fadeInTop" duration={0.4} delay={0.3}>
            <a href="#technologies" className="text-xl">
              Technologies
            </a>
          </NavLink>
          <NavLink animationType="fadeInTop" duration={0.4} delay={0.4}>
            <a href="#contact" className="text-xl">
              Contact
            </a>
          </NavLink>
        </div>
      ) : (
        <DropdownNav />
      )}
    </div>
  );
}
