/* eslint-disable no-undef */
describe('Register page (desktop)', () => {
  it('Should navigate to register and successfully submit form', () => {
    cy.visit('/');
    cy.get('a[href="/login"]')
      .click();
    cy.get('a[href="/register"]')
      .click();

    cy.get('input[name="email"')
      .type('test@email.com');
    cy.get('input[name="password"')
      .type('password');
    cy.get('input[name="passwordVerify"')
      .type('password');
    cy.get('button[type="submit"]')
      .click();

    cy.url()
      .should('be.contain', '/overview');
  });

  it('Should navigate to register and submit form with errors', () => {
    cy.visit('/');
    cy.get('a[href="/login"]')
      .click();
    cy.get('a[href="/register"]')
      .click();

    cy.get('input[name="email"')
      .type('test@email.com');
    cy.get('input[name="password"')
      .type('password');
    cy.get('input[name="passwordVerify"')
      .type('other-password');
    cy.get('button[type="submit"]')
      .click();

    cy.url()
      .should('be.contain', '/register');
  });
});