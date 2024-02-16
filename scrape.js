const scrapeCategory = (browser, url) => new Promise( async(resolve, reject) => {
    try {
        const page = await browser.newPage()
        console.log('>> Mở tab mới ...');
        await page.goto(url)
        console.log('>> Truy cập vào: ' + url);
        await page.waitForSelector('.kenh14-body-wrapper')
        console.log('>> Website đã load xong');
        resolve()
    } catch (error) {
        console.log('Lỗi ở scrape category ' + error);
        reject(error)
    }
})

module.exports = {
    scrapeCategory
}