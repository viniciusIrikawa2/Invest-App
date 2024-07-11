describe('Tests for Wallet', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.get('#nav-my-wallet').click();
        cy.wait(1000);
        cy.url().should('be.equal', 'http://localhost:3000/wallet');
    });

    it('access the Wallet page', () => {
        cy.url().should('be.equal', 'http://localhost:3000/wallet');
    });
    
    it('visible message when wallet is empty', () => {
        cy.get('#msg-empty-wallet').should('exist');
    });

});