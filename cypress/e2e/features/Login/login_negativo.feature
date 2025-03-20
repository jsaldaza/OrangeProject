@regression
Feature: Intentos fallidos de Login en OrangeHRM
@positive
    Scenario: Usuario intenta iniciar sesión con credenciales incorrectas
        Given que el usuario visita la página de login
        When ingresa su usuario "Admin" y contraseña "incorrecta123"
        And hace clic en el botón de login
        Then debería ver un mensaje de error "Invalid credentials"
