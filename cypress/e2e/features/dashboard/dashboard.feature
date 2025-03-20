@regression @dashboard
Feature: Validaciones en el Dashboard de OrangeHRM

    @positive
    Scenario: Usuario visualiza correctamente el Dashboard
        Given que el usuario inicia sesión correctamente
        Then debería ver el dashboard del sistema
