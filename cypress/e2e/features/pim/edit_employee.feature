Feature: Edición de empleados en OrangeHRM

    @pim @regression
    Scenario: Editar la información de un empleado
        Given que el usuario inicia sesión como "admin"
        When navega a la sección de empleados
        And edita el nombre del empleado "Juan Pérez" a "Juan Carlos Pérez"
        Then el empleado debería mostrar el nuevo nombre en la lista
