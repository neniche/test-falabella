Feature:  search for Tottus Nataniel branch in google, and validate ingredients in a recipe in Tottus web page.

  Like QA, I want to search for Tottus Nataniel branch in google, and after validate some
  ingredients in cinnamon Rolls recipe in Tottus web page.


  Scenario: Looking for Tottus Nataniel and ingredients in Cinnamon Rolls recipe
    Given I see google web page
    When I type "tottus sucursales" text in google search bar
    Then I press on "enter" key in google search bar
    Then I see tottus branches list
    Then I look for "Tottus Nataniel" branch in the list
    Then I click on "Sitio web" boton
    Then I see tottus web page
    Then I click on "Recetas" opcion
    Then I see "Recetas" web page
    Then I click on "Alta" dificulty
    Then I click on "Corona de rollitos de canela" recipe
    Then I see "Corona de rollitos de canela" page
    Then I validate that "azúcar rubia" ingredient is in the recipe
    Then I also validate that "canela" ingredient is in the recipe


