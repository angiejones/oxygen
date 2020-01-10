web.init()
web.open('https://automationbookstore.dev/')

const title = 'Agile Testing'
web.type('id=searchBar',title)
web.waitForExist('li.ui-screen-hidden')

const numberOfVisibleBooks = web.getElementCount('li:not(.ui-screen-hidden)')
assert.equal(numberOfVisibleBooks, 1, 'There should only be 1 book visible')
assert.equal(web.getText('li:not(.ui-screen-hidden) h2'), title, 'Book title incorrect')

web.closeWindow()