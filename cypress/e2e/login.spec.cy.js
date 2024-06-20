
describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should successfully log in with valid credentials', () => {
    cy.validCredentials();
    cy.loginButton()
  });

  it('should fail to log in with invalid credentials', () => {
    cy.invalidCredentials();
    cy.loginButton();
    cy.errorMessageVisibility()
    
  });

  it('should display an error message when login fails', () => {
    cy.invalidCredentials();
    cy.loginButton();
    cy.errorMessage()
  });
});
