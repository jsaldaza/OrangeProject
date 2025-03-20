class UserMenu {
  constructor() {
    this.userDropdown = ".oxd-userdropdown-name";
    this.logoutButton = "a[href='/web/index.php/auth/logout']";
  }

  logout() {
    cy.get(this.userDropdown).click();
    cy.get(this.logoutButton).click();
    cy.url().should("include", "/auth/login");
  }
}

export default new UserMenu();
