import Image from "next/image";
import { Button } from "./ui/button";

const HeroHome = () => {
  return (
    <div className="flex justify-center flex-col gap-x-4 items-center">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-y-2 items-center">
          <Image
            src="/logo.jpg"
            alt="Guilherme Silva"
            width={220}
            height={100}
            className="rounded-full"
          />
          <p className="bg-primary/10 text-primary text-sm rounded-lg p-1 border border-primary/80">
            Desenvolvedor FullStack
          </p>
        </div>
        <h1 className="text-2xl font-bold">Olá, me chamo Guilherme</h1>
        <p className="text-xs text-muted-foreground mb-4">
          Sou um Desenvolvedor Full Stack experiente com sólida formação na
          criação e desenvolvimento de aplicações web escaláveis e de alta
          qualidade.
        </p>
        <div className="flex items-center gap-x-4 justify-start">
          <Button className="animate-pulse hover:bg-primary">Saiba Mais</Button>
          <Button variant="outline">Ver projetos</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
