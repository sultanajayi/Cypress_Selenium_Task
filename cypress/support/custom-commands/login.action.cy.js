let sel;

before(() => {
    cy.fixture('selectors').then((selectors) => {
      sel = selectors;
    });
  });

 
Cypress.Commands.add('validCredentials', () => {
    cy.get('#username').type('validUsername');
    cy.get('#password').type('validPassword');
 });

 Cypress.Commands.add('invalidCredentials', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
 });

 Cypress.Commands.add('loginButton', () => {
    cy.get('#loginButton').click();
 });

 Cypress.Commands.add('errorMessageVisibility', () => {
    cy.get('#errorMessage').should('be.visible')
 });

 Cypress.Commands.add('errorMessage', () => {
    cy.get('#errorMessage').should('contain', 'Invalid credentials')
 });