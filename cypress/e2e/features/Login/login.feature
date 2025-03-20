@smoke @login
Feature: Login en OrangeHRM

    @positive
    Scenario: Usuario inicia sesión con credenciales válidas
        Given que el usuario visita la página de login
        When ingresa su usuario "Admin" y contraseña "admin123"
        And hace clic en el botón de login
        Then debería ver el dashboard del sistema

    @negative
    Scenario: Usuario intenta iniciar sesión con credenciales incorrectas
        Given que el usuario visita la página de login
        When ingresa su usuario "Admin" y contraseña "incorrecta123"
        And hace clic en el botón de login
        Then debería ver un mensaje de error "Invalid credentials"
