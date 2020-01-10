const po = require('../pages/search_page.js')
const page = po.searchPage

log.info(page.url)
page.open()

const title = 'Agile Testing'
page.search(title)
assert.equal(page.getNumberOfVisibleBooks(), 1, 'There should only be 1 book visible')
assert.equal(page.getTitlesOfVisibleBooks()[0], title, 'Book title incorrect')

web.closeWindow()