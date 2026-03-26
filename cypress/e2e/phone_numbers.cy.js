describe('Country phone numbers page', () => {

  it('TC-08 shows United States number details', () => {
    cy.visit("https://telnyx.com/phone-numbers/united-states");

    cy.get('h1').should('be.visible');
    cy.contains('+1').should('be.visible');

    cy.contains('929').should('be.visible');
    cy.contains('872').should('be.visible');
    cy.contains('213').should('be.visible');
  });

});