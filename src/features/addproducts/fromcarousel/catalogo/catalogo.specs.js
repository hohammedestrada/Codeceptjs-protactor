const ConstUtil = require('../../../../utils/ConstUtil');
const mModule = require('./CatalogoModule');
const logInModule = require('../../../../modules/LoginModule');
const logoutModule = require('../../../../modules/LogoutModule');
const dataStep = require('../../../../modules/data.specs');

let state = {};
dataStep.setFeature('@addproducts/fromcarousel');
dataStep.getDataTest(state);

Scenario("Add products from carousel de catalogo", () => {
	state.logins.forEach((value) => {
		mModule.Given('I logged in with params "<country>", "<user>" and "<password>" catalogo.feature', () => {
			logInModule.definedSteps(value.country, value.user, value.password);
			logInModule.clickButton();
			logInModule.loginSystem();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.When('I click on agregar button del carousel de catalogo', () => {
			mModule.addButtonFromCatalogo();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.CLICK_AGREGAR_PRODUCTO_DEL_CATALOGO);
		});
		
		mModule.Then('I see add product confirmation', () => {
			mModule.iSeeProductConfirmation();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.CONFIRMACION_DE_PRODUCTO_ANADIDO);
		});
		
		mModule.And('I logout on system catalogo.feature', () => {
			logoutModule.doLogout();
			logoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});
		
	});
	
});

