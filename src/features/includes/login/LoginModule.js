const AutomationUtil = require("../../../utils/AutomationUtil");

const I = actor();
const locator = require("./LoginLocator");

class LoginModule {
  
  static definedSteps(country, user, password) {
    I.amOnPage('/');
	  I.wait(1);
  	I.selectOption(locator.selectCountry(),country);
    I.fillField(locator.inputUserCode(), user);
    I.fillField(locator.inputUserPassword(), password);
  }

  static clickButton() {
    I.click(locator.btnLogin());
  }

  static loginSystem() {
    I.retry(AutomationUtil.wait()).see('Espere un momento');
    I.retry(AutomationUtil.wait()).see('Inicio');
  }

}

module.exports = LoginModule;
