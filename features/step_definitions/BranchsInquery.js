const { Given, When, Then, } = require('cucumber');
const { ClientFunction, Selector } = require('testcafe');

Given('veo la pagina de google', async function () {
    await testController.navigateTo('https://google.com');
});

When('tipeo el texto {string} en la barra de busqueda de google', async function (text) {
    const input = Selector('.gLFyf').with({ boundTestRun: testController });
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('presiono la tecla {string} en la barra de busqueda de google', async function (text) {
    await testController.pressKey(text);
});

Then('deberia ver la lista de sucursales de tottus', async function () {
    const searchLink = Selector('.i0vbXd').with({ boundTestRun: testController });
    await testController.expect(searchLink.innerText).eql('Más ubicaciones');
    await testController.click(searchLink);
});

Then('busco la sucursal {string} en el listado', async function (text) {
    const branchesList = Selector('div.dbg0pd').with({ boundTestRun: testController });
    const branchLabel = branchesList.withText(text);
    await testController.click(branchLabel);
});

Then('selecciono el boton {string}', async function (text) {
    const branchModal = Selector('a.CL9Uqc.ab_button').with({ boundTestRun: testController });
    const branchWebsiteButton = branchModal.withText(text);

    await testController.click(branchWebsiteButton);
});

Then('veo la pagina web del Tottus', async function () {
    const getLocation = ClientFunction(() => window.location.href).with({ boundTestRun: testController });
    await testController.expect(await getLocation()).contains('https://www.tottus.cl/tottus/');
});

Then('busco la opccion {string}', async function (text) {
    const recipeBoton = Selector('#new_tottus_nav_cliente_recetas').with({ boundTestRun: testController });
    await testController.click(recipeBoton);
});

Then('veo la pagina de {string}', async function (text) {
    await testController.navigateTo('http://www.tottusrecetas.cl/');
});

When('selecciono la dificultad {string}', async function (text) {
    const dificultyOption = Selector('#tab_container_21')
        .find('button.btnfilter')
        .nth(3)
        .with({ boundTestRun: testController });

    await testController
        .expect(dificultyOption.exists).ok()
        .expect(dificultyOption.textContent).contains(text);
    await testController.click(dificultyOption);
});

Then('busco la receta {string}', async function (text) {
    const recipeOption = Selector('#divRecipes')
        .find('.card-desc h3').with({ boundTestRun: testController });
    const recipeLabel = recipeOption
        .filter((node, idx) => {
            return node.textContent === text;
        }, { text });
    await testController
        .expect(recipeLabel.exists).ok();
    await testController.click(recipeLabel);
});

Then('veo la receta de {string}', async function (text) {
    const getLocation = ClientFunction(() => window.location.href).with({ boundTestRun: testController });
    await testController.expect(await getLocation()).contains('corona-de-rollitos-de-canela');
});

Then('valido que tenga {string}', async function (text) {
    const ingredientList = Selector('.divRecipe').with({ boundTestRun: testController });
    const ingredientLabel = ingredientList.withText(text);
    await testController.expect(ingredientLabel.exists).ok();
});

Then('valido que la receta tenga {string}', async function (text) {
    const ingredientList = Selector('.divRecipe').with({ boundTestRun: testController });
    const ingredientLabel = ingredientList.withText(text);
    await testController.expect(ingredientLabel.exists).ok();
});
