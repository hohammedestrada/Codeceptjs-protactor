const ConstUtil = require('../../../../utils/ConstUtil');
const mModule = require('./RevistaModule');
const logInModule = require('../../../../modules/LoginModule');
const logoutModule = require('../../../../modules/LogoutModule');
const dataStep = require('../../../../modules/data.steps');

let state = {};
dataStep.givenDataTest(state,__filename);

Given('I logged in with params "<country>", "<user>" and "<password>" revista.feature', () => {
	logInModule.definedSteps(state.login.country, state.login.user, state.login.password);
	logInModule.clickButton();
	logInModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

When('I click on agregar button del carousel de revista', () => {
	mModule.addButtonFromRevista();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CLICK_AGREGAR_PRODUCTO_DE_LA_REVISTA);
});

Then('I see add product confirmation', () => {
	mModule.iSeeProductConfirmation();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CONFIRMACION_DE_PRODUCTO_ANADIDO);
});

Then('I logout on system revista.feature', () => {
	logoutModule.doLogout();
	logoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});