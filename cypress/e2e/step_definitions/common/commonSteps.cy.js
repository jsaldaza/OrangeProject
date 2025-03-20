import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pageObjects/login/LoginPage";
import DashboardPage from "../../../pageObjects/dashboard/DashboardPage";
import AdminPage from "../../../pageObjects/admin/AdminPage";

// ✅ Paso para iniciar sesión exitosamente
Given("que el usuario inicia sesión correctamente", () => {
  LoginPage.visit("/web/index.php/auth/login");
  LoginPage.login("Admin", "admin123");
});

// ✅ Paso para verificar que el usuario está en el Dashboard
Then("debería ver el dashboard del sistema", () => {
  DashboardPage.verifyDashboardPage();
});
