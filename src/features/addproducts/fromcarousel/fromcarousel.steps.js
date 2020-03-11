const ConstUtil = require('../../../utils/ConstUtil');
const mModule = require('./FromcarouselModule');
const logInModule = require('../../includes/login/LoginModule');
const logoutModule = require('../../includes/logout/LogoutModule');

Given('I logged in with params {string}, {string} and {string}', (country, user, password) => {
	logInModule.definedSteps(country, user, password);
	logInModule.clickButton();
	logInModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,'Login correcto');
});

When('I click on agregar button del carousel de catalogo', () => {
	mModule.addButtonFromCatalogo();
	mModule.saveScreenshotWithMocha(__filename,'click en agregar producto del Catálogo');
});

When('I click on agregar button del carousel de revista', () => {
	mModule.addButtonFromRevista();
	mModule.saveScreenshotWithMocha(__filename,'click en agregar producto de la Revista');
});

Then('I see add product confirmation', () => {
	mModule.iSeeProductConfirmation();
	mModule.saveScreenshotWithMocha(__filename,'Confirmación de producto añadido');
});

Then('I logout on system', () => {
	logoutModule.doLogout();
	logoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});