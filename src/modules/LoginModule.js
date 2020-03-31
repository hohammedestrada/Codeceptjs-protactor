const BaseModule = require('../base/BaseModule');
const locator = require('../locators/LoginLocator');

class LoginModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}
 
	definedSteps(country, user, password) {
		this.I.amOnPage('/');
		this.I.waitForElement(locator.selectCountry);
  		this.I.selectOption(locator.selectCountry,country);
		this.I.fillField(locator.inputUserCode, user);
		this.I.fillField(locator.inputUserPassword, password);
	}

	clickButton() {
		this.I.click(locator.btnLogin);
		this.I.waitForElement(locator.waitingElement);
	}

	loginSystem() {
		this.waitForElements([locator.inicioLink,locator.iconCart]);
	}

}

module.exports = new LoginModule();
module.exports.LoginModule = LoginModule;
