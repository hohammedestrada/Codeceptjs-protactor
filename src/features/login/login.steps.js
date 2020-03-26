const ConstUtil = require('../../utils/ConstUtil');
const mModule = require('../../modules/LoginModule');
const logoutModule = require('../../modules/LogoutModule');
const dataStep = require('../../modules/data.steps');

let state = {};
dataStep.givenDataTest(state);

Given('I select my "<country>" and put my "<user>" and my "<password>"',() => {
	mModule.definedSteps(state.login.country, state.login.user, state.login.password);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CAMPOS_LLENADOS_CORRECTOS);
});

When('I click on ingresar a tu cuenta', () => {
	mModule.clickButton();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.ESPERANDO);
});

Then('I login on system', () => {
	mModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Then('I logout on system', () => {
	logoutModule.doLogout();
	logoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});