const mModule = require('./ByCuvModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const dataStep = require('../../../../modules/data.steps');

let state = {};
dataStep.givenDataTest(state,__filename);

Given('Me encuentro en el buscador del home "<country>", "<user>" and "<password>" bycuv.feature', () => {
	LoginModule.definedSteps(state.login.country, state.login.user, state.login.password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Digito un producto por CUV "<cuv>"', () => {
	mModule.buscarProducto(state.addproducts.search.bycuv.cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UN_PRODUCTO_POR_CUV);
});

When('Aumento la <cantidad> Hago click en el boton Agregar', () => {
	mModule.agregarAlCarrito(state.addproducts.search.bycuv.cantidad);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CLICK_AGREGAR);
});

Then('Se muestra el modal snack bar "Producto añadido correctamente"', () => {
	mModule.seMuestraElmodalDeconfirmacion()
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_MUESTRA_MODAL_PRODUCTO_ANADIDO_CORRECTAMENTE);
});

Then('El producto está agregado en el carrito', () => {
	mModule.estaAgregadoAlCarrito();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.PRODUCTO_AGREGADO_CARRITO);
});

Then('Se visualiza la cantidad que se adicionó', () => {
	mModule.seVisualizaLaCantidadQueSeAdiciono();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VISUALIZA_LA_CANTIDAD_ADICIONO);
});

Then('I logout on system bycuv.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});