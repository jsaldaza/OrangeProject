Feature: Gestión de empleados en OrangeHRM

    @pim @regression
    Scenario: Crear un nuevo empleado
        Given que el usuario inicia sesión como "admin"
        When navega a la sección de empleados
        And agrega un nuevo empleado con nombre "Juan" y apellido "Pérez"
        Then el empleado debería aparecer en la lista de empleados
