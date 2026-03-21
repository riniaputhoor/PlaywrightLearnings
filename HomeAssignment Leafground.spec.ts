import test from "@playwright/test"


test("Home Assignment", async ({ page }) => {


    await page.goto('https://leafground.com/select.xhtml');
    //select Playwright as the favourite UI automation tool
    await page.selectOption(`//select[@class="ui-selectonemenu"]`,{label:"Playwright"});
    //Printing all dropdown values from Favourite UI automation tool
    const allUItools = page.locator(`//select[@class="ui-selectonemenu"]/option`); //13 webelements
    const toolCount = await allUItools.count(); // Number of webeelement present in the dropdown


    for (let index = 0; index <toolCount; index++) {
       console.log( await allUItools.nth(index).innerText());
    }
        // Choosing pReferred Country
        await page.locator(`//label[contains(text(),"Select Country")]`).click();
        await page.locator(`//li[contains(text(),"India")]`).click();

        //Checking if cities are loaded
        await page.locator(`//label[@id="j_idt87:city_label"]`).click();
        await page.locator(`//li[contains(text(),"Bengaluru")]`).click();

        //Choose any three courses from the dropdown
        await page.locator(`//button[@aria-label="Show Options"]`).click();
        await page.locator(`//li[@data-item-label="Playwright"]`).click();
        await page.locator(`//button[@aria-label="Show Options"]`).click();
        await page.locator(`//li[@data-item-label="PostMan"]`).click();
       await page.locator(`//button[@aria-label="Show Options"]`).click();
        await page.locator(`//li[@data-item-label="JMeter"]`).click();
        //await page.locator(`//inpt[@name="j_idt87:auto-complete_input"]`).click();


        //Choose a language and print all the values from the dropdown.
        await page.locator(`//label[contains(text(),"Select Language")]`).click();
        //Printing all dropdown values from Favourite UI automation tool
        const allLanguages = page.locator(`//li[contains(@class,"ui-selectonemenu-item")]`); //13 webelements
        const languageCount = await allLanguages.count(); // Number of webeelement present in the dropdown


        for (let i = 0; i <languageCount; i++) {
        console.log( await allLanguages.nth(i).innerText());
        }
        
        //Selecting Tamil from Languages
         await page.locator(`//li[@data-label="Tamil"]`).click();

        
         //Selecting Two irrespective of the language chosen
         await page.locator(`//label[@id="j_idt87:value_label"]`).click();
         await page.locator(`//li[@id="j_idt87:value_3"]`).click();
    
    await page.waitForTimeout(3000)// Note : Only for demo  purpose
    /*await page.locator(`//input[@name="submitButton"]`).click();
        await page.waitForTimeout(3000)// Note : Only for demo  purpose*/

})