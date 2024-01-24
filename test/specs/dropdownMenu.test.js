const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Dropdow Menu",async function(){
    before(async function(){
        await InternetPage.open(`dropdown`)
    })
    it("Should select option 1", async ()=>{
        
        await InternetPage.clickDropdown()
        await InternetPage.clickDropdownOption(2)
        await expect(await InternetPage.dropdownOption(2).isSelected()).toEqual(true)
    })
    it("Should select option 2", async ()=>{
        await InternetPage.clickDropdown()
        await InternetPage.clickDropdownOption(3)
        await expect(await InternetPage.dropdownOption(3).isSelected()).toEqual(true)
    })
})