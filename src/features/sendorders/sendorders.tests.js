const mModule = require('./SendOrdersModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');
const dataStep = require('../../modules/data.tests');

let state = {};
dataStep.setFeature('@sendorders');
dataStep.getDataTest(state);

Scenario('Enviar pedido desde el carrito',() => {
	state.logins.forEach((value) => {
		mModule.Given('Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" "<cuv>" sendorders.feature', () => {
			LoginModule.definedSteps(value.country, value.user, value.password);
			LoginModule.clickButton();
			LoginModule.loginSystem();
			mModule.preCondition(state.sendorders.cuv);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.Given('Visualizo en el carrito una cantidad existente de productos', () => {
			mModule.clickIconCart();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
		});
		
		mModule.When('Hago click en el botón "Enviar pedido"', () => {
			mModule.clickEnviarPedido();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.HAGO_CLICK_ENVIAR_PEDIDO);
		});
		
		mModule.Then('Se despliega el modal informativo "Estás a punto de enviar tu pedido" con la información relacionada al pedido', async () => {
			await mModule.visualizarModalPreview();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_ENVIAR_PEDIDO);
		});
		
		mModule.Then('El pedido es confirmado', () => {
			mModule.confirmarPedido();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.PEDIDO_CONFIRMADO);
		});
		
		mModule.Then('El pedido se ha enviado', () => {
			mModule.pedidoEnviado();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.PEDIDO_ENVIADO);
		});
		
		mModule.Then('I logout on system sendorders.feature', () => {
			LogoutModule.abrirMenuLateral();
			LogoutModule.doLogout();
			LogoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});
	});
	
});
