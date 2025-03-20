class DashboardPage {
  constructor() {
    // Selectores de elementos en el Dashboard
    this.dashboardHeader = ".oxd-topbar-header-title";
    this.userDropdown = ".oxd-userdropdown-name";
    this.logoutButton = "a[href='/web/index.php/auth/logout']";
  }

  // Método para verificar que estamos en el Dashboard
  verifyDashboardPage() {
    cy.url().should("include", "/dashboard");
    cy.get(this.dashboardHeader)
      .should("be.visible")
      .and("contain.text", "Dashboard");
  }

  // Método para cerrar sesión
  logout() {
    cy.get(this.userDropdown).should("be.visible").click(); // ✅ Esperamos que esté visible antes de hacer clic
    cy.get(this.logoutButton).should("be.visible").click(); // ✅ Esperamos que esté visible antes de hacer clic
    cy.url().should("include", "/auth/login"); // ✅ Validamos que el usuario fue redirigido correctamente
  }

  // Método para verificar que hemos cerrado sesión
  verifyLogout() {
    cy.url().should("include", "/auth/login"); // ✅ Validamos que estamos en la página de login
    cy.get("input[name='username']").should("be.visible"); // ✅ Verificamos que el campo de usuario es visible
  }
}

// Exportamos la clase para usarla en los Step Definitions
export default new DashboardPage();
