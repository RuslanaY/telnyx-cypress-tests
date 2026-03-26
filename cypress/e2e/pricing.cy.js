describe('Telnyx pricing pages', () => {

  it('TC-04 shows pricing overview page', () => {
    cy.viewport(1440, 900);
    cy.visit('https://telnyx.com/pricing');

    cy.get('h1').should('be.visible');

    cy.get('main').contains('Messaging').should('be.visible');
    cy.get('main').contains('Voice').should('be.visible');
    cy.get('main').contains('Numbers').should('be.visible');
  });

  it('TC-05 shows numbers pricing page', () => {
    cy.viewport(1440, 900);
    cy.visit('https://telnyx.com/pricing/numbers');

    cy.get('main').contains('Numbers').should('be.visible');
    cy.get('main').contains('Local').should('be.visible');
    cy.get('main').contains('Toll-free').should('be.visible');
  });

});
