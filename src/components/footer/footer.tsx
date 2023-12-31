import AnimateWrapper from "../animations/animateWrapper";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-slate-50 p-8 text-center text-base text-slate-950">
      <AnimateWrapper
        animationOccurrence="whenInView"
        animationType="fadeInLeft"
        duration={1.5}
        delay={0.8}
      >
        <p>
          This portfolio was created using only personally written code with
          inspirations taken from free online sources. The images in the about
          section were downloaded from the{" "}
          <a
            href="https://storyset.com/"
            target="_blank"
            className="inline-block text-base underline decoration-slate-950 decoration-2 underline-offset-[6px] hover:scale-105 hover:px-1 transition-all duration-300 ease-in-out"
          >
            storyset website
          </a>{" "}
          in exchange for this attribution.
        </p>
        <p className="mt-4 2xl:mt-0">Mateusz Kłos 2023 &copy;</p>
      </AnimateWrapper>
    </footer>
  );
}
