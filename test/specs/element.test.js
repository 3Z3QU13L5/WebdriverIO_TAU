const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');


describe('Interacting with elements', function () {
    it('Get text for element', async () => {
        await InternetPage.open();
        let text = await InternetPage.pageHeader.getText();
        console.log(text)
        InternetPage.getLiText()
        console.log(await InternetPage.getSpecificElementText(7))

    })

    it("Is footer Displayed", async () => {
        console.log(await InternetPage.pageFooter.isDisplayed())
    })
    it("Does the Header exist", async () => {
        console.log(await InternetPage.pageHeader.isExisting())
    })
    it("Is the footer in Viewport", async () => {
        console.log(await InternetPage.pageFooter.isDisplayedInViewport())
    })
    it("Is the header in Viewport", async () => {
        console.log(await InternetPage.pageHeader.isDisplayedInViewport())
    })
    it("Is subheader enable?", async () => {
        console.log(await InternetPage.subHeading.isEnabled())
    })
    it("Click Element", async () => {
        await InternetPage.clickOnLink()
    })
})