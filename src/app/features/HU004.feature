Scenario: Un administrador agrega a un conductor a su lista de conductores correctamente.
Given que el administrador ha iniciado sesión
Y se encuentra en el apartado Conductores
When el administrador hace click en el botón Nuevo conductor
Y coloca los datos del conductor, incluidos sus ‘Nombres’, ‘Apellidos’, ‘Fecha de nacimiento’, ‘Ruta (obligatorio)’ y ‘Correo’
Y hace click en botón Completar
Then el sistema envía una confirmación de invitación al correo ingresado
Y registra al conductor una vez sea aceptada la invitación por parte del conductor.

Scenario: Un administrador no logra agregar a un conductor a su lista de conductores.
Given que el administrador ha iniciado sesión
Y se encuentra en el apartado Conductores
When el administrador hace click en el botón Nuevo conductor
Y coloca los datos del conductor, incluidos sus ‘Nombres’, ‘Apellidos’, ‘Fecha de nacimiento’, ‘Ruta (obligatorio)’ y ‘Correo’
Y hace click en botón Completar
Then el sistema envía una confirmación de invitación al correo ingresado
Y no logra registrar al conductor puesto que la invitación enviada al correo fue rechazada por parte del conductor.
Y se muestra un mensaje de error al administrador, indicando el error en color rojo.