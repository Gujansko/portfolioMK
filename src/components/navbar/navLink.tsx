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
  children: React.ReactNode;
}) {
  return (
    <AnimateWrapper
      animationOccurence="once"
      animationType={animationType}
      duration={duration}
      delay={delay}
    >
      <Button variant="link">{children}</Button>
    </AnimateWrapper>
  );
}
