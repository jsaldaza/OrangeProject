import BasePage from "./BasePage";
import AdminPage from "../../../pageObjects/AdminPage";

class PIMPage extends BasePage {
  constructor() {
    super();
    this.pimMenu = "a[href='/web/index.php/pim/viewPimModule']";
    this.addEmployeeButton = "button.oxd-button--secondary";
    this.firstNameField = "input[name='firstName']";
    this.lastNameField = "input[name='lastName']";
    this.saveButton = "button[type='submit']";
  }

  navigate() {
    cy.get(this.pimMenu).click();
  }

  addEmployee(firstName, lastName) {
    cy.get(this.addEmployeeButton).click();
    cy.get(this.firstNameField).type(firstName);
    cy.get(this.lastNameField).type(lastName);
    cy.get(this.saveButton).click();
  }
}

export default new PIMPage();
