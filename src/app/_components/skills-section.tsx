import { GridPattern } from "@/components/magicui/grid-pattern";
import { AnimatedListDemo } from "./animated-list-demo";
import { cn } from "../_lib/utils";

const SkillsSection = () => {
  return (
    <section className="py-12 px-6 relative">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="flex flex-col ml-5 space-y-4 items-center justify-center w-full lg:w-[500px]">
          <h2 className="text-4xl font-bold">
            <span className="text-primary">Tecnologias</span> que domino
          </h2>
          <p className="text-muted-foreground w-full text-sm">
            Na nossa agência, combinamos: criatividade e tecnologia de ponta
            para entregar soluções digitais que realmente fazem a diferença.
            Utilizamos um conjunto moderno e eficiente de ferramentas e
            tecnologias para criar sites e aplicações performáticas, intuitivas
            e visualmente atraentes.
          </p>
          <p className="text-muted-foreground w-full text-sm">
            Com essa stack tecnológica, garantimos que seu projeto não só tenha
            um design incrível, mas também ofereça alta performance, segurança e
            uma experiência de usuário impecável. Nossa missão é transformar
            suas ideias em realidade digital!
          </p>
        </div>
        <div>
          <AnimatedListDemo />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
