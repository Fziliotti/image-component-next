Esse repositório é uma tradução do exemplo do [componente Image do Next.js](https://github.com/vercel/next.js/tree/canary/examples/image-component)

# Componente Image - Projeto Exemplo

Esse exemplo mostra como utilizar o [componente Image do Next.js](https://nextjs.org/docs/api-reference/next/image) servindo imagens otimizadas e responsivas.

A página principal ([`pages/index.js`](pages/index.js)) possui algumas imagens, uma imagem interna e outra externa. No arquivo [`next.config.js`](next.config.js), a propriedade `domains` é usada para habilitar imagens externas. As outras páginas demonstram os layouts diferentes. Execute ou faça deploy da aplicação para entender como isso funciona! 

## Live demo

[https://image-component.nextjs.gallery/](https://image-component.nextjs.gallery/)

## Faça o seu próprio deploy

Faça deploy do exemplo oficial em [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ou veja uma prévia em [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/image-component)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/image-component&project-name=image-component&repository-name=image-component)

## Como utilizar

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) com [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), ou [pnpm](https://pnpm.io) para inicializar o exemplo:

```bash
npx create-next-app --example image-component imagem-app
# or
yarn create next-app --example image-component imagem-app
# or
pnpm create next-app --example image-component imagem-app
```

Faça deploy para a nuvem com [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentação](https://nextjs.org/docs/deployment)).
