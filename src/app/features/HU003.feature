Scenario: Un administrador registra un nuevo viaje
Given que el administrador ha iniciado sesión
Y se encuentra en el apartado Viajes
When el administrador hace click en el botón Crear viaje
Y selecciona mediante un buscador el punto de partida, punto final, etc.
Y hace click en botón Completar
Then el sistema realiza una consulta a la base de datos, insertando todos los datos del viaje ingresado.
Y redirige al administrador al apartado de Viajes.

Scenario: Un administrador elimina un viaje existente
Given que el administrador ha iniciado sesión
Y se encuentra en el apartado Viajes
When el administrador marca lo(s) viaje(s)
Y hace click en el botón Eliminar viaje(s)
Y hace click en el botón Confirmar eliminación
Then el sistema realiza una consulta a la base de datos para eliminar los datos con la(s) ID de lo(s) viaje(s) seleccionada(s).
Y redirige al administrador al apartado de Viajes.

Scenario: Un administrador modifica una ruta existente
Given que el administrador ha iniciado sesión
Y se encuentra en el apartado Viajes
Y hace click en un viaje de la lista
When el administrador modifica los datos del viaje
Y hace click en el botón Guardar
Then el sistema realiza una consulta a la base de datos, modificando todos los datos del viaje modificado a partir de su ID.
Y redirige al administrador al apartado de Viajes.