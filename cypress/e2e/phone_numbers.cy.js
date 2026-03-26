describe('Country phone numbers page', () => {

  it('TC-08 shows United States number details', () => {

    cy.visit('https://telnyx.com/phone-numbers/united-states', {
      timeout: 60000,
      failOnStatusCode: false,
    });

    cy.get('h1', { timeout: 20000 }).should('contain', 'United');

    cy.contains('+1', { timeout: 20000 }).should('exist');

  });

});