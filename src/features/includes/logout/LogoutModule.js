const locator = require('./LogoutLocator');
const BaseModule = require('../../../base/BaseModule');

class LogoutModule extends BaseModule.BaseModule {

	doLogout() {
		this.I.waitForElement(locator.logoutLink);
  		this.I.click(locator.logoutLink);
	}
	verifyLogout(){
		this.waitForElements([locator.selectCountry,locator.inputUserCode,locator.inputUserPassword]);
	}
  
}

module.exports = new LogoutModule();
module.exports.LogoutModule = LogoutModule;