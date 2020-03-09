const BaseModule = require("../../../base/BaseModule");

const locator = require("./LoginLocator");

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
    this.I.retry(this.wait).see('Espere un momento');
    this.I.retry(this.wait).see('Inicio');
  }

}

module.exports = new LoginModule();
module.exports.LoginModule = LoginModule;
