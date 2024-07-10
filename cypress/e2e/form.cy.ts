describe('Create Investment form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create');
  });

  it('fill in the form with success', () => {
    cy.get('#owner').type('Lorem ipsum');
    cy.get('#creation-date').type('2024-07-10');
    cy.get('#initial-value').type('1000');

    cy.get('form').submit();

    cy.contains('Success').should('exist');
  });
  
  it('invalid form submission', () => {
    cy.get('#btn-form-invest').click();
    cy.contains('Success').should('not.exist');
  });

  it('the InitialValue field must start filled with the value 0', () => {
    cy.get('#initial-value').should('have.value', 0);
  });

  it('do not allow negative values in the InitialValue field', () => {
    cy.get('#initial-value').type('-');
    cy.get('#initial-value').should('have.value', 0);
  });

});