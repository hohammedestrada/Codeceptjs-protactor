const ConstUtil = require('../../../utils/ConstUtil');
const mModule = require('./fromcarousel.module');
const logInModule = require('../../includes/login/login.module');
const logoutModule = require('../../includes/logout/logout.module');

Given('I logged in with params {string}, {string} and {string}', (country, user, password) => {
  logInModule.definedSteps(country, user, password);
  logInModule.clickButton();
  logInModule.loginSystem();
  actor().saveScreenshotWithMocha(__filename,"Login correcto");
});

When('I click on agregar button', () => {
  mModule.addButton();
  actor().saveScreenshotWithMocha(__filename,"click en agregar producto");

});

Then('I see add product confirmation', () => {
  mModule.iSeeProductConfirmation();
  actor().saveScreenshotWithMocha(__filename,"Confirmación de producto añadido");
});

Then('I logout on system', () => {
  logoutModule.doLogout();
  logoutModule.verifyLogout();
  actor().saveScreenshotWithMocha(__filename,ConstUtil.logoutMessage);
});