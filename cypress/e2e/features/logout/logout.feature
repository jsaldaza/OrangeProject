@regression @logout
Feature: Cierre de sesión en OrangeHRM

    @positive
    Scenario: Usuario cierra sesión correctamente
        Given que el usuario visita la página de login
        When ingresa su usuario "Admin" y contraseña "admin123"
        And hace clic en el botón de login
        Then debería ver el dashboard del sistema
        When hace clic en el botón de logout
        Then debería ser redirigido a la página de login
