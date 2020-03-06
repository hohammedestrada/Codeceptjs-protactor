const scenario = require('../../../utils/AutomationUtil');
const AutomationUtil = require('../../../utils/AutomationUtil');

const I = actor();
const locator = require('./LogoutLocator');

class LogoutModule {
  static doLogout() {
	  I.wait(1);
  	I.retry(AutomationUtil.wait()).click(locator.logoutLink);
  }
  static verifyLogout(){
    I.retry(AutomationUtil.wait()).seeElement(locator.selectCountry);
    I.retry(AutomationUtil.wait()).seeElement(locator.inputUserCode);
    I.retry(AutomationUtil.wait()).seeElement(locator.inputUserPassword);
  }
}

module.exports = LogoutModule;