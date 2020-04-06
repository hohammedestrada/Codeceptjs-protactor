const mModule = require('./ByCategoriaModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const dataStep = require('../../../../modules/data.tests');

let state = {};
dataStep.setFeature('@addproducts/search');
dataStep.getDataTest(state);

Scenario("Filtrar categorías en el landing de productos", () => {
	
	state.logins.forEach((value) => {
		mModule.Given('I logged in with params "<country>", "<user>" and "<password>" bycategoria.feature', () => {
			LoginModule.definedSteps(value.country, value.user, value.password);
			LoginModule.clickButton();
			LoginModule.loginSystem();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.And('Me encuentro en la sección del menú lateral Categorías', () => {
			mModule.verificarSeccionMenuLateral();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.MENU_LATERAL_CATEGORIAS);
		});
		
		mModule.When('Hago click en la sección Categorías', () => {
			mModule.clickEnCategoria();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.HAGO_CLICK_SECCION_CATEGORIAS);
		});
		
		mModule.And('Hago click en la sección Fragancias', () => {
			mModule.verificarLinkDeFragancias();
			mModule.clickEnSeccionFragancias();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.HAGO_CLICK_SECCION_FRAGANCIAS);
		});
		
		mModule.Then('Se visualizan los filtros de Fragancias', () => {
			mModule.verificarFiltrosDeFragancias();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.VERIFICAR_LINK_FRAGANCIAS);
		});
		
		mModule.And('Y los productos están filtrados en el landing', () => {
			mModule.verificarProductosFiltradosEnElLanding();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.PRODUCTOS_FILTRADOS_EN_EL_LANDING);
		});
		
		mModule.And('I logout on system bycategoria.feature', () => {
			LogoutModule.abrirMenuLateral();
			LogoutModule.doLogout();
			LogoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});
	});
	

});
