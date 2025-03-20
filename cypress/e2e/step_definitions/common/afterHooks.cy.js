import { After } from "@badeball/cypress-cucumber-preprocessor";
import UserMenu from "../../pageObjects/UserMenu";

After(() => {
  cy.url().then((url) => {
    if (url.includes("/dashboard")) {
      cy.log("🚪 Ejecutando After Hook: Cerrando sesión del usuario...");
      UserMenu.logout();
    }
  });

  // 🔥 Limpiar cookies y almacenamiento local después de cada prueba
  cy.clearCookies();
  cy.clearLocalStorage();
});
