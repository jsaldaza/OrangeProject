Feature: Asignación de Roles en OrangeHRM

    @admin @regression
    Scenario: Administrador asigna un rol a un usuario
        Given que el usuario inicia sesión como "admin"
        When navega a la sección de administración
        And asigna el rol "Manager" al usuario "Empleado01"
        Then el usuario debería tener el rol actualizado
