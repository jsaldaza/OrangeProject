Feature: Eliminación de empleados en OrangeHRM

    @pim @regression
    Scenario: Eliminar un empleado
        Given que el usuario inicia sesión como "admin"
        When navega a la sección de empleados
        And elimina el empleado "Juan Pérez"
        Then el empleado ya no debería aparecer en la lista
