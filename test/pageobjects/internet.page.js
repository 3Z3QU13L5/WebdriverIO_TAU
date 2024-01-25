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
    get hereLink() { return $(`.example a`) }
    get iframeBody() { return $(`#tinymce`) }
    get iframe() { return $(`.example #mce_0_ifr`) }
    get columnA() { return $(`#column-a`) }
    get columnB() { return $(`#column-b`) }
    get columnAHeader() { return $(`#column-a header`) }
    get columnBHeader() { return $(`#column-b header`) }
    get dropdown() { return $(`.example #dropdown`)}
    get alertResult() {return $(`.example #result`)}
    get enableDisableButton() { return $(`#input-example button`)}
    get enableDiableInput() { return $(`#input-example input`)}
    get addElementButton() { return $(`.example button`)}
    get dynamicButton() { return $(`#checkbox-example button`)}
    
    /**
     * There could be more than one delete button
     * @param {number} idx 
     */
    deleteElement(idx) { return $(`#elements button:nth-child(${idx})`)}
    /**
     * 1. JS Alert, 2. JS Confirm and 3. JS Prompt 
     * @param {number} idx 
     */
    alertButton(idx) { return $(`.example ul li:nth-child(${idx}) button`)}
    /**
     * The index goes from 1 to 3, 1 being default option, 2 is option 1 and 3 is option 2
     * @param {number} idx 
     * 
     */
    dropdownOption(idx) {return $(`.example #dropdown option:nth-child(${idx})`)}
    specificChldElement(idx) { return this.parent.$(`li:nth-child(${idx})`) }
    checkbox(idx) { return $(`#checkboxes input:nth-child(${idx})`) }
    hyperLink(idx) { return $(`ul li:nth-child(${idx}) a`) }
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

    /**
     * Click the "click here" Link
     */

    async clickHereLink() {
        await this.hereLink.waitForDisplayed()
        await this.hereLink.click()
    }


    /**
     * 
     * @param {string} text 
     */
    async sentTextToBody(text) {
        await this.iframeBody.waitForDisplayed()
        await this.iframeBody.clearValue()
        await this.iframeBody.click()
        await browser.keys(text)
    }

    /**
     * Drag box A in column a to box B in column b
     */
    async dragAtoB() {
        await this.columnA.waitForDisplayed()
        await this.columnA.dragAndDrop(await this.columnB)
    }

    async clickDropdown(){
        await this.dropdown.waitForDisplayed()
        await this.dropdown.click()
    }

    async clickDropdownOption(idx){
        await this.dropdownOption(idx).waitForDisplayed()
        await this.dropdownOption(idx).click()
    }

    /**
     * 
     * @param {number} idx 
     */
    async clickJSAlertButton(idx){
        await this.alertButton(idx).waitForDisplayed()
        await this.alertButton(idx).click()

    }

    /**
     * Togle the Enable/Disable Button
     */
    async toggleEnableButton(){
        await this.enableDisableButton.waitForDisplayed()
        await this.enableDisableButton.click()
    }

    /**
     * Click Add Element Button
     */
    async clickAddElement(){
        await this.addElementButton.waitForDisplayed()
        await this.addElementButton.click()
    }

    /**
     * Click New Delete Element
     */
    async clickDeleteElement(idx){
        await this.deleteElement(idx).waitForDisplayed()
        await this.deleteElement(idx).click()
    }

    async toggleDynamicButton(){
        await this.dynamicButton.waitForDisplayed()
        await this.dynamicButton.click()
    }

    open(path = '') {
        return super.open(path);
    }

}

module.exports = new InternetPage()