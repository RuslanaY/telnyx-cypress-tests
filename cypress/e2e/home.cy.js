describe('Telnyx homepage', () => {

  it('TC-01 loads homepage and hero text', () => {
    cy.visit('https://telnyx.com/');
    cy.title().should('include', 'Telnyx');
    cy.get('h1').should('contain.text', 'Infrastructure for');
    cy.get('h1').should('contain.text', 'real-time agents');
  });

 it('TC-02 shows header navigation', () => {
    cy.viewport(1440, 900);
    cy.visit('https://telnyx.com/');

    cy.contains('button:visible, a:visible', 'Products').should('be.visible');
    cy.contains('button:visible, a:visible', 'Pricing').should('be.visible');
    cy.contains('button:visible, a:visible', 'Resources').should('be.visible');
    cy.contains('a:visible', 'Sign up').should('be.visible');
    cy.contains('a:visible', 'Log in').should('be.visible');
  });


 it('TC-03 shows hero section links', () => {
  cy.viewport(1440, 900);
  cy.visit('https://telnyx.com/');

  cy.get('h1').should('be.visible');

  cy.get('main').find('a:visible').its('length').should('be.greaterThan', 0);
});
});
