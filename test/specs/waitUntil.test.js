const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Wait For Enable",async function(){
    before(async function(){
        await InternetPage.open(`dynamic_controls`)
    })
    it("Should wait until button change to Add", async()=>{
        await InternetPage.toggleDynamicButton()
        await InternetPage.dynamicButton.waitUntil(async () => {
            return await InternetPage.dynamicButton.getText() === 'Add'
        }, {timeout:6000, timeoutMsg:"Expect button text to change"})
        await expect(await InternetPage.dynamicButton.getText()).toEqual('Add')
    })
    it("Should wait until button chage to Remove", async()=>{
        await InternetPage.toggleDynamicButton()
        await InternetPage.dynamicButton.waitUntil(async () => {
            return await InternetPage.dynamicButton.getText() === 'Remove'
        }, {timeout:6000, timeoutMsg:"Expect button text to change"})
        await expect(await InternetPage.dynamicButton.getText()).toEqual('Remove')
    })

})