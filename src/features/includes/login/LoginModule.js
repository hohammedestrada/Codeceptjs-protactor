const AutomationUtil = require("../../../utils/AutomationUtil");

const I = actor();
const locator = require("./LoginLocator");

class LoginModule {
  
  definedSteps(country, user, password) {
    I.amOnPage('/');
	  I.wait(1);
  	I.selectOption(locator.selectCountry,country);
    I.fillField(locator.inputUserCode, user);
    I.fillField(locator.inputUserPassword, password);
  }

  clickButton() {
    I.click(locator.btnLogin);
  }

  loginSystem() {
    I.retry(AutomationUtil.wait).see('Espere un momento');
    I.retry(AutomationUtil.wait).see('Inicio');
  }

}

module.exports = new LoginModule();
module.exports.LoginModule = LoginModule;
