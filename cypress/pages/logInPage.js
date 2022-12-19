class LogInPage {
  emailInput = () => cy.get('#email-input');
  nextButton = () => cy.get('[data-e2e="login-email"]');
  passwordInput = () => cy.get('#password-input');
  logInButton = () => cy.get('[data-e2e="signin-with-password"]');
  signUpLink = () => cy.get('#signup-link a');

  // Logs in with the given email and password
  logInFlow(email, password) {
    this.emailInput().type(email);
    this.nextButton().click();
    this.passwordInput().type(password);
    this.logInButton().click();
  }
}
  
module.exports = new LogInPage();
