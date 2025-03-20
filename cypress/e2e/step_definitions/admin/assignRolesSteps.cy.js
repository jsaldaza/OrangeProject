import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminPage from "../../pageObjects/AdminPage";
import AdminPage from "../../../pageObjects/AdminPage";

When("navega a la sección de administración", () => {
  AdminPage.navigateToAdmin();
});

When("asigna el rol {string} al usuario {string}", (role, user) => {
  AdminPage.assignRole(user, role);
});

Then("el usuario debería tener el rol actualizado", () => {
  AdminPage.verifyRoleAssigned();
});
