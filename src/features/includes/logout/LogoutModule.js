const locator = require('./LogoutLocator');
const BaseModule = require('../../../base/BaseModule');

class LogoutModule extends BaseModule.BaseModule {

	doLogout() {
	this.waitForElement(locator.logoutLink);
  	this.I.click(locator.logoutLink);
	}
	verifyLogout(){
		this.I.retry(this.wait).seeElement(locator.selectCountry);
		this.I.retry(this.wait).seeElement(locator.inputUserCode);
		this.I.retry(this.wait).seeElement(locator.inputUserPassword);
	}
  
}

module.exports = new LogoutModule();
module.exports.LogoutModule = LogoutModule;