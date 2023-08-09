"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import DropdownItem from "./dropdownItem";
import DropdownTrigger from "./dropdownTrigger";
import DropdownContent from "./dropdownContent";
import { navSections } from "../navbar/navSections";
import useClickOutside from "@/utility/useClickOutside";
import AnimateWrapper from "../animations/animateWrapper";

export default function DropdownNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseDropdown = () => {
    setIsOpen(false);
  };
  const dropdownMenuRef = useClickOutside(handleCloseDropdown);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={dropdownMenuRef}
    >
      <AnimateWrapper animationOccurence="once" animationType="fadeInTop" duration={0.4} delay={0.15}>
        <DropdownTrigger setDropdownState={setIsOpen} />
      </AnimateWrapper>
      <DropdownContent dropdownState={isOpen}>
        {navSections.map((section, idx) => (
          <DropdownItem
            icon={section.icon}
            text={section.text}
            id={section.id}
            setDropdownState={setIsOpen}
            key={idx}
          />
        ))}
      </DropdownContent>
    </motion.div>
  );
}
