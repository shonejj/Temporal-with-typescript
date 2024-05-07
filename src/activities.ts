import puppeteer from 'puppeteer';

export async function greet(url: string): Promise<string> {
  try {
    if (!url) {
      throw new Error('Please provide a URL!');
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const pageTitle = await page.title();

    await browser.close();

    return `Scrap completed for ${url}! Title: ${pageTitle}`;
  } catch (error) {
    return `Scrap failed for ${url}! Error: ${error}`;
  }
}
