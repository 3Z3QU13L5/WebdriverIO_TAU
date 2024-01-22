const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');
const LoginPage = require('../pageobjects/login.page')

describe("Test element actions", function () {

    this.beforeEach(async () => {
        await InternetPage.open()
    })

    it("should click element", async () => {
        await InternetPage.clickOnLink()
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
    })

    it("should get text", async () => {
        await expect(await InternetPage.getSpecificElementText(1)).toEqual('A/B Testing')
    })

    it("should check checkbox", async () => {
        await InternetPage.clickElement(await InternetPage.hyperLink(6))
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/checkboxes')
        await InternetPage.clickElement(await InternetPage.checkbox(1))
        await expect(InternetPage.checkbox(1)).toBeSelected()
    })

    it("should uncheck checkbox", async () => {
        await InternetPage.clickElement(await InternetPage.hyperLink(6))
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/checkboxes')
        await InternetPage.clickElement(await InternetPage.checkbox(3))
        await expect(await (await InternetPage.checkbox(3)).isSelected()).toEqual(false)
    })

    it("should enter username", async () => {
        await LoginPage.open()
        await InternetPage.enterUsername('John Doe')
        await expect(await InternetPage.username.getValue()).toEqual('John Doe')
    })

    it("should enter password", async () => {
        await LoginPage.open()
        await InternetPage.enterPassword('Pa55w0rd')
        await expect(await InternetPage.password.getValue()).toEqual('Pa55w0rd')
    })

    it("should clear Value", async () => {
        await LoginPage.open()
        await InternetPage.enterUsername('John Doe')
        await expect(await InternetPage.username.getValue()).toEqual('John Doe')
        await InternetPage.username.click()
        await InternetPage.username.clearValue()
        expect(await InternetPage.username.getValue()).toEqual('')

    })

})