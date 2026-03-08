//browser
//browser context --> window (individual isolated profile + incoginto mode/doesnt store any data)
// page

import { chromium, firefox, test, webkit } from "@playwright/test"; 

test(`Test to launch a browser`, async () =>  {

    const browser = await chromium.launch({headless: false}) 
    const context = await browser.newContext() 
    const page =await context.newPage()

    await page.goto('https://www.amazon.in/');

    await page.waitForTimeout(3000)

   
 });
