/// <reference types="cypress" />
Cypress.Commands.add('fillForm', (owner, creationDate, initialValue) => {
    cy.get('#owner').type(owner);
    cy.get('#creation-date').type(creationDate);
    cy.get('#initial-value').type(initialValue);
    cy.get('form').submit();
  });

  // Fill the form and navigate to the Wallet page
  Cypress.Commands.add('fillFormAndNavigate', (owner, creationDate, initialValue) => {
    cy.get('#owner').type(owner);
    cy.get('#creation-date').type(creationDate);
    cy.get('#initial-value').type(initialValue);
    cy.get('form').submit();

    cy.get('#btn-go-to-wallet').click();
  });

declare namespace Cypress {
    interface Chainable {
      fillForm(owner: string, creationDate: string, initialValue: string): Chainable<void>
      fillFormAndNavigate(owner: string, creationDate: string, initialValue: string): Chainable<void>
    }
}
