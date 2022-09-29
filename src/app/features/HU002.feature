Scenario: Un administrador quiere iniciar sesión.
Given que el administrador se encuentra en la pantalla de inicio de sesión
When el administrador ingresa sus datos registrados previamente en los cuadros de texto y hace click en el botón Iniciar sesión
Then el sistema realiza una consulta a la base de datos y confirma la existencia de los datos del administrador en la misma
Y redirige al administrador al inicio de la página con su cuenta vinculada temporalmente.

Scenario: Un visitante quiere iniciar sesión como administrador sin haberse registrado.
Given que el visitante se encuentra en la pantalla de inicio de sesión
When el visitante ingrese sus datos los cuales no han sido registrados previamente en los cuadros de texto y hace click en el botón Iniciar sesión
Then el sistema realiza una consulta a la base de datos y deniega el acceso debido a que los datos ingresados no se encuentran en la misma.
Y se resaltan de color rojo los cuadros de texto
Y se muestra un mensaje de error en la parte inferior indicando que los datos son erróneos o no están registrados.