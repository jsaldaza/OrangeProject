Feature: Gestión de Usuarios en OrangeHRM

    @admin @smoke
    Scenario: Administrador crea un nuevo usuario
        Given que el usuario inicia sesión como "admin"
        When navega a la sección de administración
        And agrega un nuevo usuario con username "Empleado02" y rol "HR Manager"
        Then el usuario debería aparecer en la lista

    @admin @regression
    Scenario: Administrador elimina un usuario
        Given que el usuario inicia sesión como "admin"
        When navega a la sección de administración
        And elimina el usuario "Empleado02"
        Then el usuario ya no debería aparecer en la lista
