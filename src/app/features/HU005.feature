Scenario: Un administrador establece un día como feriado
Given que el administrador ha iniciado sesión 
Y se encuentra en el apartado de Horarios
When el administrador hace click en la fecha que quiere establecer como feriado 
Then el sistema actualiza secuencialmente mediante colores el día seleccionado como feriado, no feriado, etc.