const mModule = require('./SendOrdersModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');

Given('Dado que me encuentro en el pedido {string}, {string} and {string} sendorders.feature', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Visualizo en el carrito una cantidad existente de productos', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
});

When('Hago click en el botón "Enviar pedido"', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.ELIJO_ELIMINAR_PRODUCTO_PULSANDO_TACHITO);
});

Then('Entonces se despliega el modal informativo "Estás a punto de enviar tu pedido" con la información relacionada al pedido', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_CON_DOS_OPCIONES_SI_CANCELAR);
});

Then('El pedido es confirmado', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CUANDO_HAGO_CLICK_BOTON_SI_ELIMINAR);
});

Then('El pedido se ha enviado', (cuv) => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ELIMINA_LISTA_PRODUCTO_ELEGIDO.format(cuv));
});

Then('I logout on system removeproducts.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});