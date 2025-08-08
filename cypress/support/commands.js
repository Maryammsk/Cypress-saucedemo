
// -- Custom Command: Login to SauceDemo --
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

// -- Custom Command: Logout from SauceDemo --
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});

// -- Custom Command: Assert error message after login --
Cypress.Commands.add('assertLoginError', (message) => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', message);
});

export {};
