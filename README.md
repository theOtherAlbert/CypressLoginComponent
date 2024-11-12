# Setting up Cypress component testing
You can use Intelij or VSCode to do the below.

If you have any issues, please contact me for assistance

## Creating a dummy app and installing Cypress

To test a component, we first need to have a component. 

In the real world, a developer will be giving you this component, but for this excercise you need to create it yourself. 

You can call it anything you want, but to make it easier, just call it `CypressLoginComponent`.

Run the below code and when prompted, respond as described below.

```js
npm create vite@latest CypressLoginComponent -- --template react
```

- When asked to provide a "package name", press `ENTER`.
- When asked to select a "framework", select `React`.
- When asked to select a "variant", select `TypeScript`.


When done installing, navigate to the folder.

```js
cd CypressLoginComponentTest
```

If you run the below and see some files there, it means that great things are happening.

```js
ls
```

Now lets install cypress for your project. Dont stress, it might take 3-5 minutes .

```js
npm install cypress --save-dev
```

## Setting up your config and settings

Almost there...

Now we want our simple webpage to look a bit nice, so we need to give things some style. Install the below.

```js
npm install styled-components
```

You are most likely gonna run into some issues with TypeScript, so do the below:

- In the Intelij/VSCode file explorer, go to the file `cypress.config.ts` and change its name to `cypress.config.cjs`.
- Now **replace** its content with the below:

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
``` 


