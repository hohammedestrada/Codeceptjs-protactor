const BaseModule = require("../../../base/BaseModule");

const locator = require("./LoginLocator");
const ConstUtil = require("../../../utils/ConstUtil");

class LoginModule extends BaseModule.BaseModule {
 
  definedSteps(country, user, password) {
    this.I.amOnPage('/');
	  this.I.wait(1);
  	this.I.selectOption(locator.selectCountry,country);
    this.I.fillField(locator.inputUserCode, user);
    this.I.fillField(locator.inputUserPassword, password);
  }

  clickButton() {
    this.I.click(locator.btnLogin);
  }

  loginSystem() {
    this.I.retry(this.wait).see(ConstUtil.WAIT_A_MOMMENT);
    this.I.waitForElement(locator.inicioLink,ConstUtil.WAITING_TIME);
  }

}

module.exports = new LoginModule();
module.exports.LoginModule = LoginModule;
