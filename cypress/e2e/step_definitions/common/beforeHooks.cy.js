import { Before } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/LoginPage";
import DashboardPage from "../../pageObjects/DashboardPage";

Before(() => {
  // 🔥 Navegar a la página de inicio antes de cada test
  cy.log("🔄 Ejecutando Before Hook: Navegando a la página de login...");
  LoginPage.visit();
  
  // 🔥 Si se necesita login automático para algunos escenarios
  cy.session("login-session", () => {
    LoginPage.enterUsername("Admin");
    LoginPage.enterPassword("admin123");
    LoginPage.clickLogin();
    DashboardPage.verifyDashboardPage();
  });
});
