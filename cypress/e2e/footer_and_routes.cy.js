describe('Footer and route health', () => {

  it('TC-09 shows footer legal links', () => {
    cy.viewport(1440, 900);
    cy.visit('https://telnyx.com/');
    cy.scrollTo('bottom');

    cy.contains('a:visible', 'Privacy Policy').should('be.visible');
    cy.contains('a:visible', 'Cookie Policy').should('be.visible');
    cy.contains('a:visible', 'Trust Center').should('be.visible');
    cy.contains('a:visible', 'Terms and Conditions of Service').should('be.visible');
    cy.contains('© Telnyx LLC').should('be.visible');
  });

  it('TC-10 checks important public pages status codes', () => {
  cy.request({ url: 'https://telnyx.com/', failOnStatusCode: false }).its('status').should('be.oneOf', [200, 301, 302]);
  cy.request({ url: 'https://telnyx.com/pricing', failOnStatusCode: false }).its('status').should('be.oneOf', [200, 301, 302]);
  cy.request({ url: 'https://telnyx.com/pricing/numbers', failOnStatusCode: false }).its('status').should('be.oneOf', [200, 301, 302]);
  cy.request({ url: 'https://telnyx.com/sign-up', failOnStatusCode: false }).its('status').should('be.oneOf', [200, 301, 302]);
  cy.request({ url: 'https://telnyx.com/mission-control', failOnStatusCode: false }).its('status').should('be.oneOf', [200, 301, 302]);
});

});