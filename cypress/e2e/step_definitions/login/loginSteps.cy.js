import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/LoginPage";
import DashboardPage from "../../pageObjects/DashboardPage";

Given("que el usuario visita la página de login", () => {
  LoginPage.visit();
});

When("ingresa su usuario {string} y contraseña {string}", (username, password) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.clickLogin();
});

Then("debería ver el dashboard del sistema", () => {
  DashboardPage.verifyDashboardPage();
});

Then("debería ver un mensaje de error {string}", (mensajeError) => {
  LoginPage.verifyErrorMessage(mensajeError);
});
