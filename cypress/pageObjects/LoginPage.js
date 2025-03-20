import BasePage from "../common/BasePage";

class LoginPage extends BasePage {
  constructor() {
    super();
    this.usernameInput = "input[name='username']";
    this.passwordInput = "input[name='password']";
    this.loginButton = "button[type='submit']";
    this.errorMessage = ".oxd-alert-content-text";
  }

  login(username, password) {
    this.typeText(this.usernameInput, username);
    this.typeText(this.passwordInput, password);
    this.clickElement(this.loginButton);
  }

  verifyErrorMessage(message) {
    this.verifyText(this.errorMessage, message);
  }
}

export default new LoginPage();
