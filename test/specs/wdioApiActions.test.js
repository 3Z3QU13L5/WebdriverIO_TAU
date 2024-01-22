const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');
const LoginPage = require('../pageobjects/login.page');
const internetPage = require('../pageobjects/internet.page');

describe("Webdriver IO API Actions", async function () {
    it("Should Hover on figure 1", async () => {
        await InternetPage.open('hovers')
        await InternetPage.hoverOnFigure(3)
        await expect(await InternetPage.getFigureDetailsText(3)).toContain(`name: user1`)
    })

    it("Should Hover on figure 2", async () => {
        await InternetPage.open('hovers')
        await InternetPage.hoverOnFigure(4)
        await expect(await InternetPage.getFigureDetailsText(4)).toContain(`name: user2`)
    })

    it("Should Hover on figure 3", async () => {
        await InternetPage.open('hovers')
        await InternetPage.hoverOnFigure(5)
        await expect(await InternetPage.getFigureDetailsText(5)).toContain(`name: user3`)
    })

    it("should send keyboard value", async () => {
        await InternetPage.open("key_presses")
        await InternetPage.keysToTarget(" ")
        expect(await InternetPage.getResultKey()).toEqual("You entered: SPACE")
    })
})