const { $ } = require('@wdio/globals')
const Page = require('./page');

class InternetPage extends Page {

    get pageHeader () { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElement() { return this.parent.$$('li') }
    specificChldElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get firstLink() { return $(`ul li:nth-child(1) a`)}

    async getLiText() {
        await this.childElement.filter((element) => {
            console.log(element.getText())
        })
    }

    async getSpecificElementText(index) {
        return await this.specificChldElement(index).getText()
    }

    async clickOnLink() {
        if(await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
        await browser.pause(5000)
            
    }

    open () {
        return super.open('');
    }

}

module.exports = new InternetPage()