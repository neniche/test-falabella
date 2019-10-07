Feature: En la pagina de Tottus Nataniel buscar la receta de la corona de Rollitos de canela

  Como QA quiero validar que la receta de la corona de Rollitos de canela tenga azucar morena y
  canela en la pagina del Tottus

  Scenario: buscar el sitio web de tottus Nataniel
    Given veo la pagina de google
    When tipeo el texto "tottus sucursales" en la barra de busqueda de google
    Then presiono la tecla "enter" en la barra de busqueda de google
    Then deberia ver la lista de sucursales de tottus
    Then busco la sucursal "Tottus Nataniel" en el listado
    Then selecciono el boton "Sitio web"
    Then veo la pagina web del Tottus
    Then busco la opccion "Recetas"
    Then veo la pagina de "Recetas"
    Then selecciono la dificultad "Alta"
    Then busco la receta "Corona de rollitos de canela"
    Then veo la receta de "Corona de rollitos de canela"
    Then valido que tenga "azúcar rubia"
    Then valido que la receta tenga "canela" 
    
    
