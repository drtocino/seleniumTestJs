const {Builder, By, Key} = require('selenium-webdriver');
// const firefox = require('selenium-webdriver/firefox');   // En caso de una ruta diferente de firefox descomentar esta linea


(async function facebookLogin() {
  // const binary = "/opt/firefox/firefox" // En caso de tener firefox en una ruta distinta a la que es por defecto cambiar esta variable

  let driver = await new Builder().forBrowser('firefox').setFirefoxOptions().build();  
  // let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().setBinary(binary)).build();   // En caso de una ruta diferente de firefox descomentar esta linea
  try {
    await driver.get('https://www.facebook.com/');
    await driver.findElement(By.name('email')).sendKeys('dch19940@gmail.com');
    await driver.findElement(By.name('pass')).sendKeys('P@ssw0rd', Key.RETURN);
    await driver.sleep(5 * 1000)
  } finally {
    await driver.quit();
  }
})();