Scenario: Un visitante quiere registrarse como administrador
Given que el visitante se encuentra en la pantalla de registro
When el visitante ingresa sus datos en los cuadros de texto y hace click en el botón Registrarse
Then el sistema inserta los datos del visitante en la base de datos
Y asigna como administrador a los datos de dicho visitante
Y redirige al nuevo administrador la pantalla de inicio.