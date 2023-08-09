"use client";
import { motion } from "framer-motion";
import { animationVariants } from "./animationVariants";

export default function AnimateOnce({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants: animationVariants;
}) {
  return (
    <motion.div animate="inView" initial="notInView" variants={variants}>
      {children}
    </motion.div>
  );
}
