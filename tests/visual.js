const po = require('../pages/search_page.js')
const page = po.searchPage

log.info(page.url)
page.open()

const title = 'Agile Testing'
page.search(title)

eyes.init('web')
eyes.check('Oxygen: Agile Testing book')

web.closeWindow()