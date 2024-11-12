# VERY IMPORTANT!!!
Do not download this code. You will generate it yourself.

Where I do instruct you to copy my code, you can do so. Also, feel free to compare your code to mine if you are unsure.

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

## Setting up your additional config 

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

## Add the component code

Since you are a tester and a developer today, you need to add the code for the component:
- In the Intelij/VSCode file explorer, create a `components` folder under SRC.
- Create a file named `LoginForm.tsx` under this folder.
- You should see this structure now: `src>components>LoginForm.tsx`

Now you can add the code to the above file.
- Navigate to my `src>components>LoginForm.tsx` file then copy and paste the code into your file.

   
## Add the component test code

In your terminal, run the below code to start up Cypress

```js
npx cypress open
```

You have to select `E2E` or `Component Testing`. If you think that your next step is to click on `Component Testing`, then you are correct - do it.

You should land on a `Choose a Browser` screen, **but if you didnt:**
- just click continue till you get there
- if you need to select a framework/bundle, just select `React` and `Vite` and Continue/Next
- if you land on a page taling about decendencies, click Continue/Next

On the `Choose a Browser` screen, select a browser such as `Chrome` and continue.

Select "New Spec" on the next screen.
- it will want to create a new spec/test in `cypress\component\`
- give the file the name `LoginForm.cy.tsx`

  
Click `Create Spec` and the blank test should run.
You should see this structure now in VCode/Intelij: `cypress\component\LoginForm.cy.tsx`

Now you can add the test code to the above file.
- Navigate to my `cypress\component\LoginForm.cy.tsx` file then copy and paste the code into your file (replace the existing code that was auto generated).

Ou can now save your project.

The test should run and wha-la-la



