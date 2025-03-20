import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pageObjects/LoginPage";
import DashboardPage from "../../../pageObjects/DashboardPage";
import AdminPage from "../../../pageObjects/AdminPage";


// ✅ Paso para visitar la página de login
Given("que el usuario visita la página de login", () => {
  LoginPage.visit();
});

// ✅ Paso para iniciar sesión exitosamente
Given("que el usuario inicia sesión correctamente", () => {
  LoginPage.visit();
  LoginPage.login("Admin", "admin123"); // 🔥 Se usa una cuenta válida
});

// ✅ Paso para ingresar credenciales personalizadas
When("ingresa su usuario {string} y contraseña {string}", (username, password) => {
  LoginPage.login(username, password);
});

// ✅ Paso para hacer clic en el botón de login (antes estaba en loginNegativoSteps.cy.js)
When("hace clic en el botón de login", () => {
  LoginPage.clickLogin();
});

// ✅ Paso para verificar mensajes de error
Then("debería ver un mensaje de error {string}", (mensajeError) => {
  LoginPage.verifyErrorMessage(mensajeError);
});

// ✅ Paso para verificar que el usuario está en el Dashboard
Then("debería ver el dashboard del sistema", () => {
  DashboardPage.verifyDashboardPage();
});
