const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const securePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open()

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    //     await expect(SecurePage.flashAlert).toBeExisting()
    //     await expect(SecurePage.flashAlert).toHaveTextContaining('SECURE',{ignoreCase:true})
    //     await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
    //     await expect(browser).toHaveUrlContaining('secure')
    //     await expect(browser).toHaveTitle("The Internet")
    // })

    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        await assert.equal(true,await SecurePage.flashAlert.isExisting())
        // await expect(SecurePage.flashAlert).toHaveTextContaining('SECURE',{ignoreCase:true})
        // await assert.include(await SecurePage.flashAlert.getText(), 'You logged into a secure area!')
        // await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
        (await SecurePage.flashAlert).isExisting().should.equal(true)

    })
})

