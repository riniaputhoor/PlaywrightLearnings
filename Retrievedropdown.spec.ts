
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

        await page.waitForLoadState('domcontentloaded'); 
        
        await page.locator('//a[text()="Leads"]').click();      

        await page.locator('//a[text()="Create Leads"]').click();

        
        await page.locator('//input[@id="createLeadForm_companyName"]').fill("Test Leaf");

        await page.locator('//input[@id="createLeadForm_firstName"]').fill("Rini");

        await page.locator('//input[@id="createLeadForm_lastName"]').fill("Antony");

        await page.locator('//input[@name="submitButton"]').click();

        await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_WEBSITE"});
        // or await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:"Website"});
        // or await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{index:12}) not reliable;
        
        const alldropdownvalues = page.locator('(//select[@id=createLeadForm_dataSourceId"]/option)');
        const dropdowncount=await alldropdownvalues.count();
        for(let i=0 ; i < dropdowncount; i++){

        console.log(await alldropdownvalues.nth(i).innerText());
        }

        await page.waitForTimeout(3000);

   
});
