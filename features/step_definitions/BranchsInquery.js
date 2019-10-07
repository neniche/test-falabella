const { Given, When, Then, } = require('cucumber');
const { ClientFunction, Selector } = require('testcafe');

Given('I see google web page', async function () {
    await testController.navigateTo('https://google.com');
});

When('I type {string} text in google search bar', async function (text) {
    const input = Selector('.gLFyf').with({ boundTestRun: testController });
    await testController.typeText(input, text);
});

Then('I press on {string} key in google search bar', async function (text) {
    await testController.pressKey(text);
});

Then('I see tottus branches list', async function () {
    const searchLink = Selector('.i0vbXd').with({ boundTestRun: testController });
    await testController.expect(searchLink.innerText).eql('Más ubicaciones');
    await testController.click(searchLink);
});

Then('I look for {string} branch in the list', async function (text) {
    const branchesList = Selector('div.dbg0pd').with({ boundTestRun: testController });
    const branchLabel = branchesList.withText(text);
    await testController.click(branchLabel);
});

Then('I click on {string} boton', async function (text) {
    const branchModal = Selector('a.CL9Uqc.ab_button').with({ boundTestRun: testController });
    const branchWebsiteButton = branchModal.withText(text);
    await testController.click(branchWebsiteButton);
});

Then('I see tottus web page', async function () {
    const getLocation = ClientFunction(() => window.location.href).with({ boundTestRun: testController });
    await testController.expect(await getLocation()).contains('https://www.tottus.cl/tottus/');
    await this.addScreenshotToReport();
    //await testController.navigateTo('https://www.tottus.cl/tottus/');
});

Then('I click on {string} opcion', async function (text) {
    const recipeBoton = Selector('#new_tottus_nav_cliente_recetas').with({ boundTestRun: testController });
    await testController.click(recipeBoton);
});

Then('I see {string} web page', async function (text) {
    const getLocation = ClientFunction(() => window.location.href).with({ boundTestRun: testController });
    await testController.expect(await getLocation()).contains('http://www.tottusrecetas.cl/');
});

Then('I click on {string} dificulty', async function (text) {
    const dificultyOption = Selector('#tab_container_21').find('button.btnfilter').nth(3).
        with({ boundTestRun: testController });
    await testController.expect(dificultyOption.exists).ok().expect(dificultyOption.textContent).contains(text);
    await testController.click(dificultyOption);
});

Then('I click on {string} recipe', async function (text) {
    const recipeOption = Selector('#divRecipes').find('.card-desc h3').with({ boundTestRun: testController });
    const recipeLabel = recipeOption
        .filter((node, idx) => {
            return node.textContent === text;
        }, { text });
    await testController.expect(recipeLabel.exists).ok();
    await testController.click(recipeLabel);
});

Then('I see {string} page', async function (text) {
    const getLocation = ClientFunction(() => window.location.href)
        .with({ boundTestRun: testController });
    await testController.expect(await getLocation()).contains('corona-de-rollitos-de-canela');
});

Then('I validate that {string} ingredient is in the recipe', async function (text) {
    const ingredientList = Selector('.divRecipe').with({ boundTestRun: testController });
    const ingredientLabel = ingredientList.withText(text);
    await testController.expect(ingredientLabel.exists).ok();
});

Then('I also validate that {string} ingredient is in the recipe', async function (text) {
    const ingredientList = Selector('.divRecipe').with({ boundTestRun: testController });
    const ingredientLabel = ingredientList.withText(text);
    await testController.expect(ingredientLabel.exists).ok();
});
