describe('Create Investment form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create');
  });

  it('visit the correct url', () => {
    cy.url().should('be.equal', 'http://localhost:3000/create')
  });

  it('fill in the form with success', () => {
    cy.fillInvestmentForm('Joh', '2020-02-02', '1000');
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