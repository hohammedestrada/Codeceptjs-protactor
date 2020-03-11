const mModule = require('./ByCategoriaModule');
const LoginModule = require('../../../includes/login/LoginModule');
const LogoutModule = require('../../../includes/logout/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');

Given('I logged in with params {string}, {string} and {string}', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Me encuentro en la sección del menú lateral "Categorías"', () => {
	mModule.verificarSeccionMenuLateral();
});

When('Hago click en la sección "Fragancias"', () => {
	//mModule.
});

Then('Se visualizan los filtros de "Fragancias"', () => {
	/*  LogoutModule.doLogout();
   LogoutModule.verifyLogout();
   mModule.saveScreenshotWithMocha(__filename,ConstUtil.logoutMessage); */
});

Then('Y los productos están filtrados en el landing', () => {
  
});

Then('I logout on system', () => {
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.logoutMessage);
});