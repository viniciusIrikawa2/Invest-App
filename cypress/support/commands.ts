/// <reference types="cypress" />
Cypress.Commands.add('fillInvestmentForm', (owner, creationDate, initialValue) => {
    cy.get('#owner').type(owner);
    cy.get('#creation-date').type(creationDate);
    cy.get('#initial-value').type(initialValue);
    cy.get('form').submit();
  });

declare namespace Cypress {
    interface Chainable {
      fillInvestmentForm(owner: string, creationDate: string, initialValue: string): Chainable<void>
    }
}
