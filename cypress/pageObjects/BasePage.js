class BasePage {
  visit(url) {
    cy.visit(url);
  }

  clickElement(selector) {
    cy.get(selector).click();
  }

  typeText(selector, text) {
    cy.get(selector).clear().type(text);
  }

  selectDropdown(selector, option) {
    cy.get(selector).select(option);
  }

  verifyText(selector, expectedText) {
    cy.get(selector).should("contain.text", expectedText);
  }

  verifyUrl(expectedUrlPart) {
    cy.url().should("include", expectedUrlPart);
  }
}

export default BasePage;
