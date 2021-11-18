const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');

test.describe('Adslot website', () => {
  // Browser (or driver) instance
  let browser = null;
  // Init browser before we begin
  test.before(() => {
    browser = new webdriver.Builder()
      .usingServer()
      .withCapabilities({
        browserName: 'chrome',
      })
      .build();
  });
  // Close browser after all tests
  test.after(() => {
    browser.quit();
  });

  test.it('should have 8 offices on careers page', () => {
    browser.get('http://adslot.com/careers');
    browser
      .findElements(webdriver.By.css('.ui-tabs-nav h4, .ui-tabs-nav h2'))
      .then((menuItems) => {
        assert(menuItems.length, 8);
      });
  });

  test.it('should contain a form on "contact us" page', () => {
    browser.get('http://www.adslot.com/contact-us');
    browser.findElement(webdriver.By.id("input_3_1")).isDisplayed();
    browser.findElement(webdriver.By.id("input_3_2")).isDisplayed();
    browser.findElement(webdriver.By.id("input_3_3")).isDisplayed();    
    browser.findElement(webdriver.By.id("input_3_4")).isDisplayed();
    browser.findElement(webdriver.By.id("input_3_5")).isDisplayed();
    browser.findElement(webdriver.By.xpath("//*[@id="input_3_6_chosen"]/a")).isDisplayed();
    browser.findElement(webdriver.By.id("input_3_8")).isDisplayed();    
    browser.findElement(webdriver.By.id("gform_submit_button_3")).isDisplayed();
    
    // Verifying if the fields are Enabled or not, on the page - Contact Us
    browser.findElement(webdriver.By.id("input_3_1")).isEnabled();
    browser.findElement(webdriver.By.id("input_3_2")).isEnabled();
    browser.findElement(webdriver.By.id("input_3_3")).isEnabled();    
    browser.findElement(webdriver.By.id("input_3_4")).isEnabled();
    browser.findElement(webdriver.By.id("input_3_5")).isEnabled();
    browser.findElement(webdriver.By.xpath("//*[@id="input_3_6_chosen"]/a")).isEnabled();
    browser.findElement(webdriver.By.id("input_3_8")).isEnabled();    
    browser.findElement(webdriver.By.id("gform_submit_button_3")).isEnabled();
    
    //Verifying if the Dropdown Field Region has been selected with some value or not
    browser.findElement(webdriver.By.xpath("//*[@id="input_3_6_chosen"]/a")).isSelected();
  });
});
