describe('Tests for Wallet', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/wallet');
    });

    it('visit the Wallet page', () => {
        cy.url().should('be.equal', 'http://localhost:3000/wallet');
    });
    
    it('visible message when wallet is empty', () => {
        cy.get('#msg-empty-wallet').should('exist');
    });

    it('visible message when withdrawal history is empty', () => {
        cy.get('#msg-empty-transaction').should('exist');
    });

    it('list investment in the wallet correctly', () => {
        cy.get('#nav-invest-now').click();
        cy.fillInvestmentForm('John', '2020-02-02', '1000');
        cy.get('#btn-go-to-wallet').click();
        cy.get('#table-wallet').should('exist');
        cy.get('#msg-empty-wallet').should('not.exist');
    });

    it('withdraw investment successfully', () => {
        cy.get('#nav-invest-now').click();
        cy.fillInvestmentForm('John', '2020-02-02', '1000');
        cy.get('#btn-go-to-wallet').click();
        cy.get('#btn-withdraw').click();
        cy.get('#msg-empty-wallet').should('exist');
        cy.get('#msg-empty-transaction').should('not.exist');
        cy.get('#table-transaction').should('exist');
    });
});