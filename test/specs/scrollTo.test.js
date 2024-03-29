const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Scroll to Element", async function () {
    it("Should scroll to page footer", async () => {
        await InternetPage.open()
        await InternetPage.pageHeader.waitForDisplayed()
        //await InternetPage.pageHeader.waitForDisplayed({timeout:1000, reverse:true}) // will wait for it to disapears or ot be displayed.
        await InternetPage.scrollToPageFooter()
        await expect(await InternetPage.pageFooter.isDisplayedInViewport()).toBe(true)
    })

    it("Should scroll into view", async () => {
        await InternetPage.open()
        await InternetPage.pageHeader.waitForDisplayed()
        await InternetPage.pageFooter.scrollIntoView()
        await expect(await InternetPage.pageFooter.isDisplayedInViewport()).toBe(true)
    })
})