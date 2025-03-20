import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminPage from "../../../pageObjects/AdminPage";


When("navega a la sección de administración", () => {
  AdminPage.navigate();
});

When("crea un usuario con nombre {string} y rol {string}", (username, role) => {
  AdminPage.createUser(username, role);
});

Then("el usuario debería ser creado correctamente", () => {
  cy.contains("Successfully Saved").should("be.visible");
});
