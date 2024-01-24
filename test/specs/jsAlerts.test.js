const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("JavaScript Alerts",async function(){
    before(async function(){
        await InternetPage.open(`javascript_alerts`)
    })
    it("Should get text of alert", async ()=>{
        await InternetPage.clickJSAlertButton(1)
        await expect(await browser.getAlertText()).toEqual("I am a JS Alert")
    })
    it("Should accept alert", async ()=>{
        await browser.acceptAlert()
        await expect(await InternetPage.alertResult.getText()).toEqual("You successfully clicked an alert")
    })
    it("Should dismiss alert", async ()=>{
        await InternetPage.clickJSAlertButton(2)
        await browser.dismissAlert()
        await expect(await InternetPage.alertResult.getText()).toEqual("You clicked: Cancel")
    })
    it("Should send text to alert", async ()=> {
        await InternetPage.clickJSAlertButton(3)
        await browser.sendAlertText("This is some text")
        await browser.acceptAlert()
        await expect(await InternetPage.alertResult.getText()).toEqual("You entered: This is some text")
    })
    
})