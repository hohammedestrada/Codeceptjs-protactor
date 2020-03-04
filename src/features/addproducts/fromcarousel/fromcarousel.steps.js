const mModule = require('./fromcarousel.module');

let logInModule = require('../../includes/login/login.module');

Given('I logged in with params {string}, {string} and {string}', (country, user, password) => {
  logInModule.definedSteps(country, user, password);
  logInModule.clickButton();
  logInModule.loginSystem();
});

When('I click on agregar button', () => {
  mModule.addButton();
});

Then('I see the product detail', () => {
  mModule.iseeProductDetail();
});
