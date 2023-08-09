import { StaticImageData } from "next/image";
import user from "public/navSections/user.png";
import info from "public/navSections/info.png";
import briefcase from "public/navSections/briefcase.png";

type navSection = {
  text: string;
  icon: StaticImageData;
  id: string;
};

export const navSections: navSection[] = [
  { text: "about", icon: info, id: "#about" },
  { text: "experience", icon: user, id: "#experience" },
  { text: "contact", icon: briefcase, id: "#contact" },
];
