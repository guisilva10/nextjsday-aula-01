import AboutSection from "./_components/about-section";
import { Header } from "./_components/header";
import HeroHome from "./_components/hero";
import SkillsSection from "./_components/skills-section";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroHome />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
