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

  verifyText(selector, expectedText) {
    cy.get(selector).should("contain.text", expectedText);
  }
}

export default BasePage;
