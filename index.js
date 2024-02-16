// const startBrowser = require('./browser')
// const scrapeController = require('./scrapeController')

// const browser = startBrowser
// scrapeController(browser)

const fs = require("fs");
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.traversymedia.com");

  // await page.screenshot({ path: 'example.png', fullPage: true});
  // await page.pdf({ path: 'example.pdf', format: 'A4'});

  // const html = await page.content();
  const courses = await page.$$eval("#cscourses .card", (elements) =>
    elements.map((e) => ({
      title: e.querySelector(".card-body h3").innerText,
      level: e.querySelector(".card-body .level").innerText,

      // description: e.querySelector('.card-body span').innerText,
      url: e.querySelector(".card-footer a").href,
      thumbnail: e.querySelector(".cscourse-img").src,
    }))
  );
  console.log(courses);

  //Save data to JSON file
  fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log("File saved!");
  });

  await browser.close();
}

run();
