
describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should successfully log in with valid credentials', () => {
    cy.get('#username').type('validUsername');
    cy.get('#password').type('validPassword');
    cy.get('#loginButton').click();

   
    cy.url().should('not.include', '/login'); 
  });

  it('should fail to log in with invalid credentials', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
    cy.get('#loginButton').click();

    
    cy.get('#errorMessage').should('be.visible');
  });

  it('should display an error message when login fails', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
    cy.get('#loginButton').click();

    
    cy.get('#errorMessage').should('contain', 'Invalid credentials');
  });
});
