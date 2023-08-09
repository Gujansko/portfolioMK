import { Github } from "lucide-react";
import OutsideLink from "./outsideLink";
import AnimateWrapper from "../animations/animateWrapper";

export default function CodeContent() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-4">
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.5}
      >
        <h1 className="mb-6">
          You can checkout this and my other projects on:
        </h1>
      </AnimateWrapper>
      <div className="flex items-end justify-center gap-6">
        <AnimateWrapper
          animationOccurence="whenInView"
          animationType="fadeInBottom"
          duration={1.5}
          delay={0.6}
        >
          <OutsideLink
            href={"https://github.com/Gujansko/portfolioMK"}
            containsImage={false}
            underlineColor="decoration-slate-950"
          >
            <p>This Project</p>
          </OutsideLink>
        </AnimateWrapper>
        <AnimateWrapper
          animationOccurence="whenInView"
          animationType="fadeInBottom"
          duration={1.5}
          delay={0.7}
        >
          <div className="flex flex-col flex-wrap items-center gap-2 text-2xl">
            <Github width={30} height={30} />
            <p>Github</p>
          </div>
        </AnimateWrapper>
        <AnimateWrapper
          animationOccurence="whenInView"
          animationType="fadeInBottom"
          duration={1.5}
          delay={0.8}
        >
          <OutsideLink
            href={"https://github.com/Gujansko"}
            containsImage={false}
            underlineColor="decoration-slate-950"
          >
            <p>My Profile</p>
          </OutsideLink>
        </AnimateWrapper>
      </div>
    </div>
  );
}
