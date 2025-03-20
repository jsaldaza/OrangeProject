import BasePage from "./BasePage";

class AdminPage extends BasePage {
  constructor() {
    super();
    this.adminMenu = "a[href='/web/index.php/admin/viewAdminModule']";
    this.addUserButton = "button.oxd-button--secondary";
    this.usernameField = "input[name='username']";
    this.roleDropdown = ".oxd-select-dropdown";
    this.saveButton = "button[type='submit']";
    this.userTable = ".oxd-table";
    this.deleteButton = "button.oxd-icon-button";
    this.confirmDeleteButton = "button.oxd-button--danger";
  }

  navigate() {
    cy.get(this.adminMenu).click();
  }

  createUser(username, role) {
    cy.get(this.addUserButton).click();
    cy.get(this.usernameField).type(username);
    cy.get(this.roleDropdown).select(role); // 🔥 Select en lugar de click()
    cy.get(this.saveButton).click();
  }

  verifyUserExists(username) {
    cy.get(this.userTable).should("contain.text", username);
  }

  deleteUser(username) {
    cy.contains(this.userTable, username)
      .parent()
      .find(this.deleteButton)
      .click();
    cy.get(this.confirmDeleteButton).click();
  }

  verifyUserDeleted(username) {
    cy.get(this.userTable).should("not.contain.text", username);
  }

  assignRole(user, role) {
    cy.contains(this.userTable, user)
      .parent()
      .find(this.roleDropdown)
      .select(role); // 🔥 Usamos `select()` en lugar de `click()`
    cy.get(this.saveButton).click();
  }

  verifyRoleAssigned(user, role) {
    cy.contains(this.userTable, user)
      .parent()
      .should("contain.text", role);
  }
}

export default new AdminPage();
