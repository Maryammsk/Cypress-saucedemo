describe('SauceDemo Login Tests', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assert that we are redirected to inventory page
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('should not login with invalid credentials', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('invalid_password');
    cy.get('[data-test="login-button"]').click();

    // Assert error message
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('should show error for locked out user', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Assert specific error
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.');
  });

  it('should display error if username is empty', () => {
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });

  it('should display error if password is empty', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain', 'Password is required');
  });
});
