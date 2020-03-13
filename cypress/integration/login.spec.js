/* eslint-disable no-undef */
describe('Login page (desktop)', () => {
  it('Should navigate to login and succesfully submit form', () => {
    cy.visit('/');
    cy.get('a[href="/login"]')
      .click();

    cy.get('input[name="email"')
      .type('test@email.com');
    cy.get('input[name="password"')
      .type('password');
    cy.get('button[type="submit"]')
      .click();

    cy.url()
      .should('be.contain', '/overview');
  });

  it('Should navigate to login and submit form with errors (invalid email)', () => {
    cy.visit('/');
    cy.get('a[href="/login"]')
      .click();

    cy.get('input[name="email"')
      .type('invalid-email.com');
    cy.get('input[name="password"')
      .type('password');
    cy.get('button[type="submit"]')
      .click();

    cy.url()
      .should('be.contain', '/login');
  });

  it('Should navigate to login and submit form with errors (no password)', () => {
    cy.visit('/');
    cy.get('a[href="/login"]')
      .click();

    cy.get('input[name="email"')
      .type('test@email.com');
    cy.get('button[type="submit"]')
      .click();

    cy.url()
      .should('be.contain', '/login');
  });
});