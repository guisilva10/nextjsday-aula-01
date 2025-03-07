import Image from "next/image";
import { Button } from "./ui/button";
import { CodeIcon } from "lucide-react";

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
          <p className="bg-primary/10 flex items-center animate-pulse text-primary text-xs rounded-lg p-2 border border-primary/80">
            Desenvolvedor FullStack
            <CodeIcon className="size-4 ml-1" />
          </p>
        </div>
        <h1 className="text-2xl font-bold">Olá, me chamo Guilherme</h1>
        <p className="text-xs text-muted-foreground mb-4">
          Sou um Desenvolvedor Full Stack experiente com sólida formação na
          criação e desenvolvimento de aplicações web escaláveis e de alta
          qualidade.
        </p>
        <div className="flex items-center gap-x-4 justify-start">
          <Button className="hover:bg-primary">Saiba Mais</Button>
          <Button variant="outline">Ver projetos</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
