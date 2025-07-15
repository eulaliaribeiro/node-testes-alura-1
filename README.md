# Testes

Projeto básico de testes com [Jest](https://jestjs.io/) e [ESLint](https://eslint.org/) usando o estilo de código do Airbnb.

## Estrutura

- index.js: Arquivo principal do projeto.
Testes devem ser escritos com Jest e podem ficar em arquivos *.test.js.

## Requisitos

- Node.js 18+
- Yarn ou npm

## Scripts

- `npm run test` – roda os testes
- `npm run test:watch` – modo watch
- `npm run test:coverage` – cobertura

## Lint

Configuração com ESLint + Airbnb base.
- `npx eslint .` – roda o lint em todo o projeto

## Observações

Este projeto está configurado como type: "module", portanto, usa sintaxe ESM (import/export).
A flag --experimental-vm-modules é necessária para rodar o Jest com ES modules na versão usada.

## Instalação

```bash
npm install
# ou
yarn install


