class LoginPage {
  constructor() {
    // Selectores
    this.usernameInput = "input[name='username']";
    this.passwordInput = "input[name='password']";
    this.loginButton = "button[type='submit']";
    this.errorMessage = ".oxd-alert-content > .oxd-text";
  }

  visit() {
    cy.visit("/web/index.php/auth/login");
  }

  login(username, password) {
    cy.get(this.usernameInput).clear().type(username);
    cy.get(this.passwordInput).clear().type(password);
    cy.get(this.loginButton).click();
  }

clickLogin() {
  cy.url().then((url) => {
    if (!url.includes("/dashboard")) {
      cy.get(this.loginButton).click();
    } else {
      cy.log("El usuario ya está en el Dashboard, no se necesita hacer login nuevamente.");
    }
  });
}


  verifyErrorMessage(message) {
    cy.get(this.errorMessage).should("contain.text", message);
  }
}

export default new LoginPage();
