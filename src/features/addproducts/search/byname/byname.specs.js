const mModule = require('./ByNameModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const dataStep = require('../../../../modules/data.specs');

let state = {};
dataStep.setFeature('@addproducts/search');
dataStep.getDataTest(state);

Scenario('Buscar una oferta por nombre que tenga más de un medio de venta', () => {

	state.logins.forEach((value) => {
		mModule.Given('Me encuentro en el buscador del home "<country>", "<user>" and "<password>" byname.feature', () => {
			LoginModule.definedSteps(value.country,value.user,value.password);
			LoginModule.clickButton();
			LoginModule.loginSystem();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
		});
		
		mModule.Given('Digito un producto que se encuentra en ambos medios Ej. "<producto>"', () => {
			mModule.buscarProducto(state.addproducts.search.byname.producto);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UN_PRODUCTO_SE_ENCUENTRA_EN_AMBOS_MEDIOS);
		});
		
		mModule.When('Termino de digitar la palabra buscada', () => {
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.TERMINO_DE_DIGITAR_PALABRA_BUSCADA);
		});
		
		mModule.Then('Se visualizan los productos coincidentes de ambos medios', () => {
			mModule.seVisualizanLosProductos()
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VISUALIZAN_PRODUCTOS_COINCIDENTES_AMBOS_MEDIOS);
		});
		
		mModule.And('Se muestran las etiquetas respectivas <posicion>', () => {
			mModule.seVisualizanEtiquetasRespectivas(state.addproducts.search.byname.posicion);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_MUESTRAN_ETIQUETAS_RESPECTIVAS);
		});
		
		mModule.And('Se prioriza producto de catálogo con el tag "Aplica descuento" con el botón "Ver detalle" <posicion>', () => {
			mModule.seVisualizanAplicaDescuentoVerDetalle(state.addproducts.search.byname.posicion);
			mModule.clickVerDetalle(state.addproducts.search.byname.posicion);
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_PRIORIZA_PRODUCTO_CON_TAG_APLICA_DESCUENTO_CON_BOTON_VER_DETALLE);
		});
		
		mModule.And('Se visualiza producto de revista con el selector de cantidad y botón "Agregar"', () => {
			mModule.seVisualizaElBotonAgregarYSelectorCantidad();
			mModule.clickAgregar();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VIZUALIZA_PRODUCTO_REVISTA_CON_SELECTOR_CANTIDAD_BOTON_AGREGAR);
		});
		
		mModule.And('I logout on system byname.feature', () => {
			LogoutModule.abrirMenuLateral();
			LogoutModule.doLogout();
			LogoutModule.verifyLogout();
			mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
		});
	});
	
});