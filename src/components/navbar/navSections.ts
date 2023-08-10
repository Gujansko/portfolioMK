import { StaticImageData } from "next/image";
import user from "public/navSection/user.png";
import info from "public/navSection/info.png";
import briefcase from "public/navSection/briefcase.png";
import cpu from "public/navSection/cpu.png";

type navSection = {
  text: string;
  icon: StaticImageData;
  id: string;
};

export const navSections: navSection[] = [
  { text: "about", icon: info, id: "#about" },
  { text: "experience", icon: user, id: "#experience" },
  { text: "technologies", icon: cpu, id: "#technologies" },
  { text: "contact", icon: briefcase, id: "#contact" },
];
