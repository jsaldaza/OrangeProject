import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminPage from "../../pageObjects/AdminPage";
import AdminPage from "../../../pageObjects/AdminPage";

When("agrega un nuevo usuario con username {string} y rol {string}", (username, role) => {
  AdminPage.addUser(username, role);
});

Then("el usuario debería aparecer en la lista", () => {
  AdminPage.verifyUserExists();
});

When("elimina el usuario {string}", (username) => {
  AdminPage.deleteUser(username);
});

Then("el usuario ya no debería aparecer en la lista", () => {
  AdminPage.verifyUserDeleted();
}); 
