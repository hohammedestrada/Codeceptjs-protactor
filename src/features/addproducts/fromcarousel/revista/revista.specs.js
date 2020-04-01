const ConstUtil = require('../../../../utils/ConstUtil');
const mModule = require('./RevistaModule');
const logInModule = require('../../../../modules/LoginModule');
const logoutModule = require('../../../../modules/LogoutModule');
const dataStep = require('../../../../modules/data.specs');

let state = {};
dataStep.setFeature('@addproducts/fromcarousel');
dataStep.getDataTest(state);

Scenario('Agregar item a carrito desde carrusel de revista', () => {
	state.logins.forEach((value) => {

		mModule.Given('I logged in with params "<country>", "<user>" and "<password>" revista.feature', () => {
			logInModule.definedSteps(value.country, value.user, value.password);
			logInModule.clickButton();
			logInModule.loginSystem();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.When('I click on agregar button del carousel de revista', () => {
			mModule.addButtonFromRevista();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.CLICK_AGREGAR_PRODUCTO_DE_LA_REVISTA);
		});
		
		mModule.Then('I see add product confirmation', () => {
			mModule.iSeeProductConfirmation();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.CONFIRMACION_DE_PRODUCTO_ANADIDO);
		});
		
		mModule.Then('I logout on system revista.feature', () => {
			logoutModule.doLogout();
			logoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});

	});
	
});

