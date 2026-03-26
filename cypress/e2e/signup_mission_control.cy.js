describe('Signup and Mission Control pages', () => {

  it('TC-06 shows sign-up page', () => {
    cy.viewport(1440, 900);
    cy.visit('https://telnyx.com/sign-up');

    cy.get('h1').should('be.visible');
    cy.contains('a:visible', 'Log in').should('be.visible');
  });

 it('TC-07 shows mission control steps', () => {
    cy.viewport(1440, 900);
    cy.visit('https://telnyx.com/mission-control');

    cy.contains(/HOW IT WORKS/i).scrollIntoView().should('be.visible');

    cy.get('main').contains('Set up your Mission Control account').should('be.visible');
    cy.get('main').contains('Buy phone numbers and inventory').should('be.visible');
    cy.get('main').contains('Configure your infrastructure').should('be.visible');
    cy.get('main').contains('Monitor all usage in real time').should('be.visible');
  });


});