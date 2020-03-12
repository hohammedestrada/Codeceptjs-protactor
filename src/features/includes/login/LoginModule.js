const BaseModule = require('../../../base/BaseModule');

const locator = require('./LoginLocator');
const ConstUtil = require('../../../utils/ConstUtil');

class LoginModule extends BaseModule.BaseModule {
 
	definedSteps(country, user, password) {
		this.I.amOnPage('/');
		this.waitForElement(locator.selectCountry);
  		this.I.selectOption(locator.selectCountry,country);
		this.I.fillField(locator.inputUserCode, user);
		this.I.fillField(locator.inputUserPassword, password);
	}

	clickButton() {
		this.I.click(locator.btnLogin);
	}

	loginSystem() {
		this.waitForElement(locator.waitingElement);
		this.waitForElement(locator.inicioLink);
	}

}

module.exports = new LoginModule();
module.exports.LoginModule = LoginModule;
