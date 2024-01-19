const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Test element actions", function () {
    this.beforeEach(async () => {
        await InternetPage.open()
    })
    it("should click element", async () => {
        await InternetPage.clickOnLink()
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
    })
    it("should get text", async () => {
        await expect(InternetPage.getSpecificElementText(1)).toEqual('A/B Testing')
    })
})