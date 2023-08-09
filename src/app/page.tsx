import Navbar from "@/components/navbar/navbar";
import HomeSection from "@/components/homeSection/homeSection";
import WaveDivider from "@/components/dividers/waveDivider";
import AboutSection from "@/components/aboutSection/aboutSection";
import ExperienceSection from "@/components/experienceSection/experienceSection";
import ContactSection from "@/components/contactSection/contactSection";
import CurveDivider from "@/components/dividers/curveDivider";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <WaveDivider placement="top" />
      <AboutSection />
      <WaveDivider placement="bottom" />
      <ExperienceSection />
      <CurveDivider placement="top" />
      <ContactSection />
      <CurveDivider placement="bottom" />
      <Footer />
    </>
  );
}