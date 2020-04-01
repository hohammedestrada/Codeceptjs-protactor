const mModule = require('./ByCuvModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const dataStep = require('../../../../modules/data.specs');

let state = {};
dataStep.setFeature('@addproducts/search');
dataStep.getDataTest(state);

Scenario('Buscar una oferta por CUV desde el buscador',() => {

	state.logins.forEach((value) => {
		mModule.Given('Me encuentro en el buscador del home "<country>", "<user>" and "<password>" bycuv.feature', () => {
			LoginModule.definedSteps(value.country, value.user, value.password);
			LoginModule.clickButton();
			LoginModule.loginSystem();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.Given('Digito un producto por CUV "<cuv>"', () => {
			mModule.buscarProducto(state.addproducts.search.bycuv.cuv);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UN_PRODUCTO_POR_CUV);
		});
		
		mModule.When('Aumento la <cantidad> Hago click en el boton Agregar', () => {
			mModule.agregarAlCarrito(state.addproducts.search.bycuv.cantidad);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.CLICK_AGREGAR);
		});
		
		mModule.Then('Se muestra el modal snack bar "Producto añadido correctamente"', () => {
			mModule.seMuestraElmodalDeconfirmacion()
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_MUESTRA_MODAL_PRODUCTO_ANADIDO_CORRECTAMENTE);
		});
		
		mModule.And('El producto está agregado en el carrito', () => {
			mModule.estaAgregadoAlCarrito();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.PRODUCTO_AGREGADO_CARRITO);
		});
		
		mModule.And('Se visualiza la cantidad que se adicionó', () => {
			mModule.seVisualizaLaCantidadQueSeAdiciono();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VISUALIZA_LA_CANTIDAD_ADICIONO);
		});
		
		mModule.And('I logout on system bycuv.feature', () => {
			LogoutModule.abrirMenuLateral();
			LogoutModule.doLogout();
			LogoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});
	});
	
});