const mModule = require('./login.module');

/* eslint-disable */
Given('I have a defined step', () => {
  mModule.definedSteps();
});

When('I click on ingresar a tu cuenta', () => {
  mModule.clickButton();
});

Then('I login on system', () => {
  mModule.loginSystem();
});
/* eslint-enable */
