const { $ } = require('@wdio/globals')
const Page = require('./page');

class InternetPage extends Page {

    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElement() { return this.parent.$$('li') }
    get firstLink() { return $(`ul li:nth-child(1) a`) }
    get username() { return $(`#username`) }
    get password() { return $(`#password`) }
    get targetBar() { return $(`.example #target`) }
    get resutlKey() { return $(`.example #result`) }

    specificChldElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    checkbox(index) { return $(`#checkboxes input:nth-child(${index})`) }
    hyperLink(index) { return $(`ul li:nth-child(${index}) a`) }
    figures(idx) { return $(`.example .figure:nth-child(${idx}) img`) }
    figuresDetails(idx) { return $(`.example .figure:nth-child(${idx}) .figcaption h5`) }

    async hoverOnFigure(index) {
        await this.figures(index).waitForDisplayed()
        await this.figures(index).moveTo(1, 0)
    }

    async getFigureDetailsText(index) {
        await this.figuresDetails(index).waitForDisplayed()
        return await this.figuresDetails(index).getText()
    }

    async getLiText() {
        await this.childElement.filter((element) => {
            console.log(element.getText())
        })
    }

    async getSpecificElementText(index) {
        await this.specificChldElement(index).waitForDisplayed()
        return await this.specificChldElement(index).getText()
    }

    async clickElement(element) {
        await element.click()
    }

    async clickOnLink() {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await this.h3Header.waitForDisplayed()
    }

    async enterUsername(text) {
        await this.username.isDisplayed()
        await this.username.setValue(text)
    }


    async enterPassword(text) {
        await this.password.isDisplayed()
        await this.password.setValue(text)
    }
    /**
     * Send keys to an element
     * @param {string} text 
     */

    async keysToTarget(text) {
        await this.targetBar.waitForDisplayed()
        await this.targetBar.click()
        await browser.keys(text)
    }

    async getResultKey() {
        await this.resutlKey.waitForDisplayed()
        return await this.resutlKey.getText()
    }

    async scrollToPageFooter() {
        await this.pageFooter.moveTo()
    }

    open(path = '') {
        return super.open(path);
    }

}

module.exports = new InternetPage()