const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('SECURE',{ignoreCase:true})
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
        await expect(browser).toHaveUrlContaining('secure')
        await expect(browser).toHaveTitle("The Internet")
    })
})

