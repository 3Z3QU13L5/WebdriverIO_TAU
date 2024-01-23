const { expect } = require('@wdio/globals')
const InternetPage = require('../pageobjects/internet.page');
const dragAndDrop = require('../pageobjects/dragAndDrop.page')

describe("Drag and Drop", async function () {
    it("Should drag column A to column B", async () => {
        await InternetPage.open(`drag_and_drop`)
        await InternetPage.dragAtoB()
        await expect(await InternetPage.columnBHeader.getText()).toEqual("A")
    })
    it("Should drag and drop", async () => {
        await dragAndDrop.open()
        await dragAndDrop.dragDraggableToDroppable()
        await expect(await dragAndDrop.droppableParagraph.getText()).toEqual('Dropped!')
    })
})