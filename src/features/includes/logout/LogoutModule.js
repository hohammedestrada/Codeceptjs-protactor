const scenario = require('../../../utils/AutomationUtil');
const AutomationUtil = require('../../../utils/AutomationUtil');

const I = actor();
const locator = require('./LogoutLocator');

class LogoutModule {
  doLogout() {
	  I.wait(1);
  	I.retry(AutomationUtil.wait).click(locator.logoutLink);
  }
  verifyLogout(){
    I.retry(AutomationUtil.wait).seeElement(locator.selectCountry);
    I.retry(AutomationUtil.wait).seeElement(locator.inputUserCode);
    I.retry(AutomationUtil.wait).seeElement(locator.inputUserPassword);
  }
}

module.exports = new LogoutModule();
module.exports.LogoutModule = LogoutModule;