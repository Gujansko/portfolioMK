import { ReactNode } from "react";
import AnimateWrapper from "../animations/animateWrapper";
import { animationType } from "../animations/animationVariants";
import { Button } from "../ui/button";

export default function navLink({
  animationType,
  duration,
  delay,
  children,
}: {
  animationType: animationType;
  duration: number;
  delay: number;
  children: ReactNode;
}) {
  return (
    <AnimateWrapper
      animationOccurrence="once"
      animationType={animationType}
      duration={duration}
      delay={delay}
    >
      <Button variant="link">{children}</Button>
    </AnimateWrapper>
  );
}
