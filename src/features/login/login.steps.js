const ConstUtil = require('../../utils/ConstUtil');
const mModule = require('../includes/login/LoginModule');
const logoutModule = require('../includes/logout/LogoutModule');

Given(
  'I select my {string} and put my {string} and my {string}',
  (country, user, password) => {
    mModule.definedSteps(country, user, password);
    mModule.saveScreenshotWithMocha(__filename,"campos llenados correctos");
  }
);

When('I click on ingresar a tu cuenta', () => {
  mModule.clickButton();
  mModule.saveScreenshotWithMocha(__filename,"esperando ");
});

Then('I login on system', () => {
  mModule.loginSystem();
  mModule.saveScreenshotWithMocha(__filename,"login correcto");
});

Then('I logout on system', () => {
  logoutModule.doLogout();
  logoutModule.verifyLogout();
  mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});
