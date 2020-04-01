const mModule = require('./RemoveProductsModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');
const dataStep = require('../../modules/data.specs');

let state = {};
dataStep.setFeature('@removeproducts');
dataStep.getDataTest(state);

Scenario('Eliminar pedido desde el carrito',() => {
	state.logins.forEach((value)=> {
		mModule.Given('Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" "<cuv>" removeproducts.feature', () => {
			LoginModule.definedSteps(state.login.country, state.login.user, state.login.password);
			LoginModule.clickButton();
			LoginModule.loginSystem();
			mModule.preCondition(state.removeproducts.cuv);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.Given('Visualizo una cantidad existente de productos', () => {
			mModule.clickIconCart();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
		});
		
		mModule.When('Elijo eliminar un producto "<cuv>" pulsando el tachito', () => {
			mModule.verificarCantidadProductosInicial(state.removeproducts.cuv);
			mModule.eliminarProductoPulsandoElTachito(state.removeproducts.cuv);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.ELIJO_ELIMINAR_PRODUCTO_PULSANDO_TACHITO.format(state.removeproducts.cuv));
		});
		
		mModule.Then('Se despliega el modal de "¿Estás seguro de eliminar este producto?" con dos opciones "Sí, eliminar" y "Cancelar"', () => {
			mModule.verificarModal();
			mModule.verificarOpciones();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_CON_DOS_OPCIONES_SI_CANCELAR);
		});
		
		mModule.Then('Cuando hago click en el botón "Sí, eliminar"', () => {
			mModule.clickBotonSi();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.CUANDO_HAGO_CLICK_BOTON_SI_ELIMINAR);
		});
		
		mModule.Then('Se elimina de la lista el producto elegido "<cuv>"', () => {
			mModule.verificarProductoNoSeaEncontrado(state.removeproducts.cuv);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ELIMINA_LISTA_PRODUCTO_ELEGIDO.format(state.removeproducts.cuv));
		});
		
		mModule.Then('La cantidad de productos en el carrito es actualizada', () => {
			mModule.verificarCantidadProductosActual();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LA_CANTIDAD_PRODUCTOS_CARRITO_ACTUALIZADA);
		});
		
		mModule.Then('I logout on system removeproducts.feature', () => {
			LogoutModule.abrirMenuLateral();
			LogoutModule.doLogout();
			LogoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});
	});
	
});