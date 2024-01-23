const { $ } = require('@wdio/globals')
const Page = require('./page');

class dragDropPage extends Page {

    get draggable() { return $(`#draggable`) }
    get droppable() { return $(`#droppable`) }
    get droppableParagraph() { return $(`#droppable p`) }

    /**
     * Drag and drop
     */

    async dragDraggableToDroppable() {
        await this.draggable.waitForDisplayed()
        await this.draggable.dragAndDrop(await this.droppable)
    }

    async open() {
        await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
    }

}

module.exports = new dragDropPage()