"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animationVariants } from "./animationVariants";

export default function AnimateInView({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants: animationVariants;
}) {
  const control = useAnimation();
  const [ref, isInView] = useInView();
  useEffect(() => {
    if (isInView) {
      control.start("inView");
    }
  }, [control, isInView]);
  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="notInView"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
