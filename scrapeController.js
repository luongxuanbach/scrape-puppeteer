const scrapers = require('./scrape')

const scrapeController = async (browserInstance) => {
    const url = 'https://kenh14.vn/'
    try {
        let browser = await browserInstance
        let categories = scrapers.scrapeCategory(browser, url)
    } catch (error) {
        console.log("Lỗi ở Scrape Controller: " + error);
    }
}

module.exports = scrapeController