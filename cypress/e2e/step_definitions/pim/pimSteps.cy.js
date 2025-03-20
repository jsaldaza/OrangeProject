import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PIMPage from "../../pageObjects/PIMPage";

When("navega a la sección de empleados", () => {
  PIMPage.navigate();
});

When("agrega un nuevo empleado con nombre {string} y apellido {string}", (firstName, lastName) => {
  PIMPage.addEmployee(firstName, lastName);
});

Then("el empleado debería aparecer en la lista de empleados", () => {
  PIMPage.verifyEmployeeExists();
});

When("edita el nombre del empleado {string} a {string}", (oldName, newName) => {
  PIMPage.editEmployee(oldName, newName);
});

Then("el empleado debería mostrar el nuevo nombre en la lista", () => {
  PIMPage.verifyEmployeeUpdated();
});

When("elimina el empleado {string}", (employeeName) => {
  PIMPage.deleteEmployee(employeeName);
});

Then("el empleado ya no debería aparecer en la lista", () => {
  PIMPage.verifyEmployeeDeleted();
});
