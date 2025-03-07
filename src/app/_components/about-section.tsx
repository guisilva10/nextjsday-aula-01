import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 px-6">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/banner.jpg"
              alt="Thayna - Confeiteira"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 border border-primary/80 text-primary px-3 py-1 text-sm">
              3 anos de experiência
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Conheça o Guilherme
            </h2>
            <p className="text-muted-foreground">
              Com habilidades em desenvolvimento front-end e back-end, sou
              especialista em tecnologias modernas como frameworks JavaScript,
              Typescript(Next) e Node.js Tenho um histórico comprovado na
              construção de interfaces responsivas e amigáveis e na criação de
              lógicas robustas no lado do servidor
            </p>
            <p className="text-muted-foreground">
              Estou sempre disposto a enfrentar novos desafios e contribuir para
              projetos inovadores que impulsionam os limites da tecnologia.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">120+</span>
                <span className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">30+</span>
                <span className="text-sm text-muted-foreground">
                  Sites Criados
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">
                  Receitas Exclusivas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
