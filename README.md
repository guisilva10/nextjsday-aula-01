# Portfolio - NextjsDay-aula01

Este projeto é um portfolio desenvolvido do zero utilizando as mais recentes tecnologias web. Foi criado como parte da aula 01 do NextjsDay.

## 🚀 Tecnologias Utilizadas

- [Next.js 15.1.6](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [shadcn/ui 2.1.6](https://ui.shadcn.com/)
- [Magic UI](https://magicui.dev/)
- App Router

## 📋 Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Criação do Projeto

Primeiro, crie uma pasta para o projeto e navegue até ela:

```bash
mkdir meu-portfolio
cd meu-portfolio
```

### 2. Inicialize o Next.js na pasta atual

```bash
npx create-next-app@15.1.6 .
```

Durante a inicialização, selecione as seguintes opções:

- TypeScript: ✅
- ESLint: ✅
- Tailwind CSS: ✅
- `src/` directory: ✅
- Import alias (@/): ✅
- App Router (recomendado): ✅

### 3. Configuração do shadcn/ui

Inicialize o shadcn/ui:

```bash
npx shadcn@2.1.6 init
```

Selecione as seguintes opções:

- Theme: New York
- Color: Neutral
- CSS Variables: Sim
- Se aparecer algo relacionado ao React 19, selecione `use-peer-legacy-deps`

### 4. Instalação dos componentes do shadcn/ui

```bash
npx shadcn@2.1.6 add card button tooltip separator
```

### 4. Instalação dos componentes do MagicUi

```bash
npx shadcn@2.1.6 add "https://magicui.design/r/dock"
```

### 5. Estrutura de pastas e componentes

Crie os diretórios para componentes e utilitários:

```bash
mkdir -p src/app/_components src/app/_lib
```

### 6. Crie os componentes Header e Hero

```bash
touch src/app/_components/Header.tsx src/app/_components/Hero.tsx
```

### 7. Configure o arquivo utils.ts

```bash
touch src/app/_lib/utils.ts
```

### 8. Ajuste o aliases no arquivo components.js

Atualize o arquivo components.js com os seguintes aliases:

```json
{
  "aliases": {
    "components": "@/app/_components",
    "utils": "@/app/_lib/utils",
    "ui": "@/app/_components/ui",
    "lib": "@/app/_lib",
    "hooks": "@/hooks"
  }
}
```

## 🏃‍♂️ Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
meu-portfolio/
├── src/
│   ├── app/
│   │   ├── _components/       # Componentes da aplicação
│   │   │   ├── Header.tsx     # Componente de cabeçalho
│   │   │   ├── Hero.tsx       # Componente hero (apresentação)
│   │   │   └── ui/            # Componentes do shadcn/ui
│   │   ├── _lib/              # Utilitários e funções
│   │   │   └── utils.ts       # Funções utilitárias
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
├── public/                    # Arquivos estáticos
├── components/                    # Componentes de MagicUi
│   │   ├── magicui/              # Magic Ui
├── components.json            # Configuração do shadcn/ui
├── next.config.js             # Configuração do Next.js
├── package.json               # Dependências do projeto
├── tailwind.config.js         # Configuração do Tailwind CSS
└── tsconfig.json              # Configuração do TypeScript
```

## 📝 Próximos Passos

- Personalizar os componentes Header e Hero
- Adicionar seções adicionais ao portfolio (Projetos, Habilidades, Contato)
- Estilizar utilizando Tailwind CSS
- Implementar modo escuro/claro
- Adicionar animações com Magic UI

## 📚 Recursos Úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do shadcn/ui](https://ui.shadcn.com/docs)
- [Documentação do Magic UI](https://magicui.dev/docs)

## 📄 Licença

Este projeto está sob a licença MIT.
