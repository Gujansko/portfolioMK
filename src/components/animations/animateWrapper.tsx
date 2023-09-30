"use client";
import { ReactNode } from "react";
import {
  animationVariants,
  animationType,
  getAnimationVariants,
} from "./animationVariants";
import { motion } from "framer-motion";

export default function AnimateWrapper({
  children,
  animationType,
  duration,
  delay,
  animationOccurrence,
  className,
  id,
}: {
  children: ReactNode;
  animationType: animationType;
  duration: number;
  delay: number;
  animationOccurrence: "once" | "whenInView";
  className?: string;
  id?: string;
}) {
  const variants: animationVariants = getAnimationVariants(animationType);
  return (
    <motion.div
      className={`overflow-hidden ${className ? className : ""}`}
      id={id ? id : ""}
      initial={variants.notInView}
      whileInView={
        animationOccurrence === "whenInView" ? variants.inView : undefined
      }
      animate={animationOccurrence === "once" ? variants.inView : undefined}
      transition={{
        duration: duration,
        delay: delay,
        type: "spring",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
