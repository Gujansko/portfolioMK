"use client";
import Sections from "./sections/sections";
import NavLink from "./navLink";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-20 flex items-center justify-between bg-cyan-950 py-2 drop-shadow-xl"
      id="navbar"
    >
      <NavLink animationType="fadeInTop" duration={0.4} delay={0}>
        <a href="#home" className="text-2xl font-bold tracking-widest">
          MK
        </a>
      </NavLink>
      <Sections />
    </nav>
  );
}
