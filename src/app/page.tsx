import { Header } from "./_components/header";
import HeroHome from "./_components/hero";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Header />
      <HeroHome />
    </div>
  );
}
