
import { mount } from "cypress/vue"
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
import React from 'react'
import LoginForm from "../../src/components/LoginForm"


describe('LoginFormC.cy.tsx', () => {
  it('Should render input fields for LoginFrom!', () => {
    cy.mount(<LoginForm />);
    cy.get("[data-test='username']").should("have.attr", "placeholder", "Username")
    cy.get("[data-test='password']").should("have.attr", "placeholder", "Password")
    cy.get("[data-test='submit']").should("have.attr", "type", "submit")
    cy.contains('Login page').should("have.text", "Login page")
  })

  it('Should accept username and password', () => {
    cy.mount(<LoginForm />);
    cy.get("[data-test='username']").type('testuser');
    cy.get("[data-test='password']").type('testpassword');
    cy.get('button').contains('Login').as('loginButton').click();
  });
})
