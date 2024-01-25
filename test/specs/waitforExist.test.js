const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Wait For Exist",async function(){
    before(async function(){
        await InternetPage.open(`add_remove_elements/`)
    })
    it("Should wait for the input field to be enable", async()=>{
        await InternetPage.clickAddElement()
        await InternetPage.deleteElement(1).waitForExist({timeout:4000})
        await expect(await InternetPage.deleteElement(1).isExisting()).toEqual(true)
    })
    it("Should wait for the input field to be disenable", async()=>{
        await InternetPage.clickDeleteElement(1)
        await InternetPage.deleteElement(1).waitForExist({timeout:4000, reverse:true})
        await expect(await InternetPage.deleteElement(1).isExisting()).toEqual(false)
    })

})