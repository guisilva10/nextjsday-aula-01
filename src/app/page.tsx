import AboutSection from "./_components/about-section";
import { Header } from "./_components/header";
import HeroHome from "./_components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroHome />
      <AboutSection />
    </div>
  );
}
