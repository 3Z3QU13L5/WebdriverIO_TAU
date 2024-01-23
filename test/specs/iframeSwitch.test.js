const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');

describe("Switch to Iframe", async function () {
    it("Should switch to iFrame", async () => {
        await InternetPage.open(`iframe`)
        await InternetPage.h3Header.waitForDisplayed()
        await InternetPage.iframe.waitForDisplayed()
        await browser.switchToFrame(await InternetPage.iframe)
        await InternetPage.sentTextToBody("This is the text in the iframe body")
        await expect(await InternetPage.iframeBody.getText()).toEqual("This is the text in the iframe body")
    })
})