const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Switch Window", async function () {
    it("Should switch to the next window", async () => {
        await InternetPage.open(`windows`)
        let url = await browser.getUrl()
        url += "/new"
        await InternetPage.clickHereLink()
        await browser.switchWindow(`${url}`)
        await InternetPage.h3Header.isDisplayed()
        await expect(await InternetPage.h3Header.getText()).toEqual(`New Window`)
        await expect(await browser.getUrl()).toContain(url)
    })
})