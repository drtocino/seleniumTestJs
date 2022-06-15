const {Builder, By, Key} = require('selenium-webdriver');

(async function facebookLogin() {
    
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.facebook.com/');
    await driver.findElement(By.name('email')).sendKeys('dch19940@gmail.com');
    await driver.findElement(By.name('pass')).sendKeys('P@ssw0rd', Key.RETURN);
    //await driver.wait(() => driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[1]/div/div[2]/div[3]/div/div[1]/div[1]/ul/li[2]/span/div/a/span/svg')).click(), 10000);
  } finally {
    //await driver.quit();
  }
})();