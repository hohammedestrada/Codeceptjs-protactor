const ConstUtil = require('../../utils/ConstUtil');
const mModule = require('../includes/login/login.module');
const logoutModule = require('../includes/logout/logout.module');

Given(
  'I select my {string} and put my {string} and my {string}',
  (country, user, password) => {
    mModule.definedSteps(country, user, password);
    actor().saveScreenshotWithMocha(__filename,"campos llenados correctos");
  }
);

When('I click on ingresar a tu cuenta', () => {
  mModule.clickButton();
  actor().saveScreenshotWithMocha(__filename,"esperando ");
});

Then('I login on system', () => {
  mModule.loginSystem();
  actor().saveScreenshotWithMocha(__filename,"login correcto");
});

Then('I logout on system', () => {
  logoutModule.doLogout();
  logoutModule.verifyLogout();
  actor().saveScreenshotWithMocha(__filename,ConstUtil.logoutMessage);
});
