import {
  animationVariants,
  animationType,
  getAnimationVariants,
} from "./animationVariants";
import AnimateInView from "./animateInView";
import AnimateOnce from "./animateOnce";

export default function AnimateWrapper({
  children,
  animationType,
  duration,
  delay,
  animationOccurence,
}: {
  children: React.ReactNode;
  animationType: animationType;
  duration: number;
  delay: number;
  animationOccurence: "once" | "whenInView";
}) {
  const variants: animationVariants = getAnimationVariants(
    animationType,
    duration,
    delay
  );
  return (
    <div
      className={`${
        animationType === "fadeInLeft" || animationType === "fadeInRight"
          ? "overflow-hidden"
          : ""
      }`}
    >
      {animationOccurence === "once" ? (
        <AnimateOnce variants={variants}>{children}</AnimateOnce>
      ) : (
        <AnimateInView variants={variants}>{children}</AnimateInView>
      )}
    </div>
  );
}
