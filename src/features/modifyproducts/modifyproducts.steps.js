const mModule = require('./ModifyProductsModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');
const dataStep = require('../../modules/data.steps');

let state = {};
dataStep.givenDataTest(state,__filename);

Given('Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" "<cuv>" modifyproducts.feature', () => {
	LoginModule.definedSteps(state.login.country, state.login.user, state.login.password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.preCondition(state.modifyproducts.cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Visualizo una cantidad existente de productos', () => {
	mModule.visualizoCantidadExistenteProductos();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
});

When('Digito una cantidad de dos dígitos en el selector de cantidad Ej. <cantidad> "<cuv>"', async () => {
	await mModule.digitoCantidadSelectorCantidad(state.modifyproducts.cantidad, state.modifyproducts.cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UNA_CANTIDAD_DIGITOS_EN_SELECTOR_CANTIDAD.format(2,state.modifyproducts.cantidad));
});

Then('Se actualiza el precio final del producto "<cuv>"', async () => {
	await mModule.seActualizaPrecioFinalProducto(state.modifyproducts.cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_CON_DOS_OPCIONES_SI_CANCELAR);
});

Then('Se actualiza la cantidad de productos en el resumen del pedido', () => {
	mModule.seActualizaCantidadProductosResumenPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ACTUALIZA_CANTIDAD_PRODUCTOS_RESUMEN_PEDIDO);
});

Then('Se actualiza el Monto Total del pedido',async () => {
	await mModule.seActualizaMontoTotalPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ACTUALIZA_MONTO_TOTAL_PEDIDO);
});

Then('Se actualiza la Ganancia del pedido', () => {
	mModule.seActualizaGananciaPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ACTUALIZA_GANANCIA_PEDIDO);
});

Then('I logout on system modifyproducts.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});