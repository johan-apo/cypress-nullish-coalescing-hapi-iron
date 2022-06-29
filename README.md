First, install the dependencies with your preferred package manager. I'll use yarn:

```bash
yarn install
```

Run the development server:

```bash
yarn run dev
```

Then, start Cypress:
```bash
yarn run cypress:open
```

Run `spec.cy.ts` and you'll see an error about "Module parse failed: Unexpected token (178:41)" where sits a ?? operator. Check the `spec.cy.ts` and `commands.ts` to know how it is imported or implemented.

All of this is an attempt to follow this [guide for setting up Cypress, NextJS and Auth0](https://levelup.gitconnected.com/using-cypress-with-next-js-and-auth0-2dbe7282dcf), where the author used @hapi/iron to seal some info and then set that encrypted item as a cookie in the browser. The guide is outdated by the way. But in this replication we focus on @hapi/iron in a custom command.

The error says it is a "Webpack Compilation Error", so I tried following [this guide about preprocessor API](https://docs.cypress.io/api/plugins/preprocessors-api#Examples) using [webpack-preprocessor](https://github.com/cypress-io/cypress/tree/master/npm/webpack-preprocessor), but no luck, I got lost into entries, outputs, loaders and whatnot. If you think it definitely is a webpack error, try setting it up so it can compile ?? operator.