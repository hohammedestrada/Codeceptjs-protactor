const scenario = require('../../../utils/automationUtil');
const automationUtil = require('../../../utils/automationUtil');

const I = actor();
const locator = require('./logout.locator').locator;

module.exports = {
  doLogout() {
	  I.wait(1);
  	I.retry(automationUtil.wait).click(locator.logoutLink());
  },
  verifyLogout(){
    I.retry(automationUtil.wait).seeElement(locator.selectCountry);
    I.retry(automationUtil.wait).seeElement(locator.inputUserCode);
    I.retry(automationUtil.wait).seeElement(locator.inputUserPassword);
  }
};
