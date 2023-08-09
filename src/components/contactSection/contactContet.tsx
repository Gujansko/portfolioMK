import { Mail, MailPlus, Linkedin } from "lucide-react";
import AnimateWrapper from "../animations/animateWrapper";
import OutsideLink from "./outsideLink";

export default function ContactContent() {
  return (
    <div className="flex flex-col flex-wrap gap-10">
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.5}
      >
        <h1>You can contact me via:</h1>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.6}
      >
        <div className="flex flex-wrap items-center justify-center gap-1">
          <Mail width={30} height={30} />
          <p className="break-all text-2xl font-medium">
            Email Address - mateusz.klos150401@gmail.com
          </p>
        </div>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.7}
      >
        <OutsideLink
          href={"mailto:mateusz.klos150401@gmail.com"}
          containsImage={true}
          underlineColor="decoration-slate-950"
        >
          <MailPlus width={30} height={30} />
          <p>Direct Email</p>
        </OutsideLink>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurence="whenInView"
        animationType="fadeInBottom"
        duration={1.5}
        delay={0.8}
      >
        <OutsideLink
          href={"https://www.linkedin.com/in/mateusz-klos-it-pl/"}
          containsImage={true}
          underlineColor="decoration-slate-950"
        >
          <Linkedin width={30} height={30} />
          <p>LinkedIn Message</p>
        </OutsideLink>
      </AnimateWrapper>
    </div>
  );
}
