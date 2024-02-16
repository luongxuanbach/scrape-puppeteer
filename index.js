const startBrowser = require('./browser')
const scrapeController = require('./scrapeController')

const browser = startBrowser
scrapeController(browser)