import { Mail, MailPlus, Linkedin } from "lucide-react";
import AnimateWrapper from "../animations/animateWrapper";
import OutsideLink from "./outsideLink";

export default function ContactContent() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-10">
      <AnimateWrapper
        animationOccurrence="whenInView"
        animationType="fadeInTop"
        duration={1.5}
        delay={0.5}
      >
        <h2>You can contact me via:</h2>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurrence="whenInView"
        animationType="fadeInTop"
        duration={1.5}
        delay={0.6}
        className="overflow-visible"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Mail width={30} height={30} />
          <p className="break-all text-2xl font-medium">
            Email Address - mateusz.klos150401@gmail.com
          </p>
        </div>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurrence="whenInView"
        animationType="fadeInTop"
        duration={1.5}
        delay={0.7}
        className="overflow-visible"
      >
        <OutsideLink
          href={"mailto:mateusz.klos150401@gmail.com"}
          containsImage={true}
          underlineColor="decoration-slate-50"
        >
          <MailPlus width={30} height={30} />
          <p>Direct Email</p>
        </OutsideLink>
      </AnimateWrapper>
      <AnimateWrapper
        animationOccurrence="whenInView"
        animationType="fadeInTop"
        duration={1.5}
        delay={0.8}
        className="overflow-visible"
      >
        <OutsideLink
          href={"https://www.linkedin.com/in/mateusz-klos-it-pl/"}
          containsImage={true}
          underlineColor="decoration-slate-50"
        >
          <Linkedin width={30} height={30} />
          <p>LinkedIn Message</p>
        </OutsideLink>
      </AnimateWrapper>
    </div>
  );
}
