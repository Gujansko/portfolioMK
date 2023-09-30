import Navbar from "@/components/navbar/Navbar";
import HomeSection from "@/components/homeSection/homeSection";
import WaveDivider from "@/components/dividers/waveDivider";
import AboutSection from "@/components/aboutSection/aboutSection";
import ExperienceSection from "@/components/experienceSection/experienceSection";
import ContactSection from "@/components/contactSection/contactSection";
import CurveDivider from "@/components/dividers/curveDivider";
import Footer from "@/components/footer/footer";
import TechnologiesSection from "@/components/technologiesSection/technologiesSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <WaveDivider placement="top" />
      <AboutSection />
      <WaveDivider placement="bottom" />
      <ExperienceSection />
      <CurveDivider placement="top" />
      <TechnologiesSection />
      <CurveDivider placement="bottom" />
      <ContactSection />
      <Footer />
    </main>
  );
}
