const automationUtil = require("../../../utils/automationUtil");

const I = actor();
const locator = require("./login.locator").locator;

module.exports = {
  definedSteps(country, user, password) {
    I.amOnPage('/');
	  I.wait(1);
  	I.selectOption(locator.selectCountry,country);
    I.fillField(locator.inputUserCode, user);
    I.fillField(locator.inputUserPassword, password);
  },

  clickButton() {
    I.click(locator.btnLogin);
  },

  loginSystem() {
    I.retry(automationUtil.wait).see('Espere un momento');
    I.retry(automationUtil.wait).see('Inicio');
  }
};
