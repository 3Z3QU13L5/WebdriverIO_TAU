const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Wait For Enable",async function(){
    before(async function(){
        await InternetPage.open(`dynamic_controls`)
    })
    it("Should wait for the input field to be enable", async()=>{
        await InternetPage.toggleEnableButton()
        await InternetPage.enableDiableInput.waitForEnabled({timeout:4000})
        await expect(await InternetPage.enableDiableInput.isEnabled()).toEqual(true)
    })
    it("Should wait for the input field to be disenable", async()=>{
        await InternetPage.toggleEnableButton()
        await InternetPage.enableDiableInput.waitForEnabled({timeout:4000,reverse:true})
        await expect(await InternetPage.enableDiableInput.isEnabled()).toEqual(false)
    })

})