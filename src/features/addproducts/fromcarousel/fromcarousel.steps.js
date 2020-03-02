const mModule = require('./fromcarousel.module');

/* eslint-disable */
Given('I logged in', () => {
  mModule.iloggedIn();
});

When('I click on agregar button', () => {
  mModule.clickButton();
});

Then('I see the product detail', () => {
  mModule.loginSystem();
});
/* eslint-enable */
