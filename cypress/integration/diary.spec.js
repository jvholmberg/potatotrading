/* eslint-disable no-undef */
describe('Diary page (desktop)', () => {
  it('Should successfully submit form and create a new session', () => {
    cy.visit('/');
    cy.get('a[href="/login"]')
      .click();

    cy.get('input[name="email"')
      .type('test@email.com');
    cy.get('input[name="password"')
      .type('password');
    cy.get('button[type="submit"]')
      .click();

    cy.get('a[href="/diary"]')
      .click();

    cy.url()
      .should('be.contain', '/diary');
    cy.get('.MuiTableBody-root')
      .find('tr')
      .should('have.length', 4);

    cy.get('.MuiSelect-root')
      .click();
    cy.get('li[data-value="1"]')
      .click();
    cy.get('input[name="name"')
      .type('Legday');
    cy.get('input[name="comment"')
      .type('Went really well');
    cy.get('button[type="submit"]')
      .click();

    cy.get('.MuiTableBody-root')
      .find('tr')
      .should('have.length', 5);
  });
});