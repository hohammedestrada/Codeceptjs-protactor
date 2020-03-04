const mModule = require('../includes/login/login.module');
const logoutModule = require('../includes/logout/logout.module');

Given(
  'I select my {string} and put my {string} and my {string}',
  (country, user, password) => {
    mModule.definedSteps(country, user, password);
  }
);

When('I click on ingresar a tu cuenta', () => {
  mModule.clickButton();
});

Then('I login on system', () => {
  mModule.loginSystem();
});

Then('I logout on system', () => {
  logoutModule.doLogout();
  logoutModule.verifyLogout();
});
