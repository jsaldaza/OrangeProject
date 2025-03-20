import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../../pageObjects/DashboardPage";

When("hace clic en el botón de logout", () => {
  DashboardPage.logout();
});

Then("debería ser redirigido a la página de login", () => {
  DashboardPage.verifyLogout();
});
