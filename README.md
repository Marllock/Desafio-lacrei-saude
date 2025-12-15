# Desafio Lacrei Saúde

Este repositório contém a aplicação web desenvolvida como parte do desafio técnico da Lacrei Saúde. A proposta do projeto é entregar uma interface acessível, responsiva e com foco em performance e boas práticas.

**Principais objetivos:** interface limpa, formulários acessíveis, imagens otimizadas e suporte a tema claro/escuro (Dark Mode).

## Tecnologias

- Framework: Next.js 16 (App Router)
- Linguagem: TypeScript
- Estilização: styled-components
- Otimização de imagens: `next/image` e formatos modernos (WebP/AVIF)
- Qualidade de código: ESLint

## Rodando o projeto localmente

### Pré-requisitos

- Node.js 18+ recomendado
- npm (ou use `pnpm`/`yarn` conforme sua preferência)

### Passos

1. Clone o repositório:

```bash
git clone <URL-do-seu-repositório>
```

2. Entre na pasta do projeto:

```bash
cd desafio-lacrei-saude
```

3. Instale as dependências:

```bash
npm install
```

4. Rode em modo de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador: http://localhost:3000

### Build e produção local

Gerar build:

```bash
npm run build
```

Servir a versão de produção localmente:

```bash
npm start
```

## Scripts úteis

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — gerar build de produção
- `npm start` — servir build de produção
- `npm run lint` — rodar ESLint

## Sobre o Dark Mode

Este projeto oferece suporte a Dark Mode com um componente de alternância no cabeçalho (`ThemeToggle`). Principais pontos:

- O toggle altera o tema aplicando atributos/variáveis de CSS que existem em `lib/Globalstyles.ts` (ex.: `html[data-theme="dark"]`).
- As cores para os dois temas (claro/escuro) são controladas por variáveis CSS, o que facilita manter contraste e acessibilidade.
- Para testar manualmente o dark mode, abra o console do navegador e execute:

```js
document.documentElement.setAttribute('data-theme', 'dark')
// para voltar ao claro:
document.documentElement.removeAttribute('data-theme')
```

- O `ThemeToggle` no header também aciona essa mudança (e pode ser estendido para persistência em localStorage, se desejado).

## Acessibilidade e Boas Práticas

- Uso de tags semânticas e atributos `aria` nos componentes principais.
- Foco visível e controles navegáveis por teclado.
- Imagens tratadas com `next/image` para lazy-loading/otimização (quando aplicável).

## Performance e Lighthouse

- Recomenda-se rodar o build de produção antes de executar auditorias (Lighthouse) para resultados reais:

```bash
npm run build && npm start
```

- Algumas dicas rápidas para melhorar o resultado do Lighthouse:
  - Servir o site via HTTPS (Vercel fornece HTTPS automático em deploys).
  - Usar `next/image` e formatos modernos (AVIF/WebP).
  - Reduzir requisições de terceiros (fonts, analytics) ou usar `next/font` para otimização de fontes.

## Deploy

https://desafio-lacrei-saude-fawn.vercel.app/


## Resultado Lighthouse

![resultado lighthouse](lighthouse.png)