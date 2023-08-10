import { Code, Github } from "lucide-react";
import OutsideLink from "./outsideLink";
import AnimateWrapper from "../animations/animateWrapper";

export default function CodeContent() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-10">
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.5}
      >
        <div className="mb-6">
          <p>You can checkout my work on Github:</p>
        </div>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.6}
      >
        <OutsideLink
          href={"https://github.com/Gujansko/portfolioMK"}
          containsImage={true}
          underlineColor="decoration-slate-950"
        >
          <Code width={30} height={30} />
          <p>This Project</p>
        </OutsideLink>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.8}
      >
        <OutsideLink
          href={"https://github.com/Gujansko"}
          containsImage={true}
          underlineColor="decoration-slate-950"
        >
          <Github width={30} height={30} />
          <p>My Profile</p>
        </OutsideLink>
      </AnimateWrapper>
    </div>
  );
}
