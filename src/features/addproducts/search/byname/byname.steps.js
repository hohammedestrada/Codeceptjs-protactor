const mModule = require('./ByNameModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const LogoutModule = require('../../../includes/logout/LogoutModule');
const LoginModule = require('../../../includes/login/LoginModule');

Given('I logged in with params {string}, {string} and {string}', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,'Login correcto');
});

When('I write name of product and press enter', () => {
	mModule.addButton();
	mModule.saveScreenshotWithMocha(__filename,'click en agregar producto');
});

Then('I see products related', () => {
	mModule.iSeeProductConfirmation();
	mModule.saveScreenshotWithMocha(__filename,'Confirmación de producto añadido');
});

Then('I logout on system', () => {
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});