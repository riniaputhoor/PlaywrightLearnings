
//Launching Sales force session provide user name password and login
import test from "@playwright/test"; 

test("handling dropdown in select tag", async ({page}) =>  {
        //Launch Sales Force application
       await page.goto('http://leaftaps.com/opentaps/control/main/');
        //Enter UserName
        await page.locator('//input[@id="username"]').fill('democsr');
        //Enter Password
        await page.locator('//input[@id="password"]').fill('crmsfa');
        //Click on login button
        await page.locator('//input[@class="decorativeSubmit"]').click();
           

        await page.locator('//a[contains(text(),"CRM")]').click();

        await page.locator('//a[text()="Leads"]').click();

        await page.locator('//a[contains(text(),"Create Lead")]').click();

        await page.locator('//input[@id="createLeadForm_companyName"]').fill("Test Leaf");

        await page.locator('//input[@id="createLeadForm_firstName"]').fill("Rini");

        await page.locator('//input[@id="createLeadForm_lastName"]').fill("Antony");

        //await page.locator('//input[@name="submitButton"]').click();

        await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_WEBSITE"});
        // or await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Website"});
        // or await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{index:12}) not reliable;

        await page.waitForTimeout(3000);
         const alldropdownValues = page.locator(`(//select[@id="createLeadForm_dataSourceId"]/option)`); //13 webelements

        const dropDownCount = await alldropdownValues.count(); // Number of webeelement present in the dropdown

    for (let index = 0; index <dropDownCount; index++) {
       console.log( await alldropdownValues.nth(index).innerText());
    }



    // console.log( await alldropdownValues.nth(0).innerText()); //  blank
    // console.log(await alldropdownValues.nth(1).innerText()); //  Coldcall
  
    
    

    /* Step 1 : Locate the dropdown
    Steo2 : Choose the value from the dropdown by using the value attribute */

    /* Notes : When the DOM has select tag to handle a dropdown we should use selectOption method */
    
    await page.waitForTimeout(3000)// Note : Only for demo  purpose
    await page.locator(`//input[@name="submitButton"]`).click();
        await page.waitForTimeout(3000)// Note : Only for demo  purpose

});

   

