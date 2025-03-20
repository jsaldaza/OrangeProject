import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/LoginPage";
import DashboardPage from "../../pageObjects/DashboardPage";
import UserMenu from "../../pageObjects/UserMenu";
import AdminPage from "../../pageObjects/AdminPage";
import AdminPage from "../../pageObjects/AdminPage";
import UserMenu from "../../pageObjects/UserMenu";
import LoginPage from "../../pageObjects/LoginPage";



Before(() => {
  LoginPage.visit();
});

After(() => {
  cy.url().then((url) => {
    if (url.includes("/dashboard")) {
      UserMenu.logout();
    }
  });
});
