const mModule = require('./RemoveProductsModule');
const LoginModule = require('../includes/login/LoginModule');
const LogoutModule = require('../includes/logout/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');

Given('Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" removeproducts.feature', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Visualizo una cantidad existente de productos', (producto) => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UN_PRODUCTO_SE_ENCUENTRA_EN_AMBOS_MEDIOS);
});

When('Elijo eliminar un producto pulsando el tachito', () => {

	mModule.saveScreenshotWithMocha(__filename,ConstUtil.TERMINO_DE_DIGITAR_PALABRA_BUSCADA);
});

Then('Se despliega el modal de "¿Estás seguro de eliminar este producto?" con dos opciones "Sí, eliminar" y "Cancelar"', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VISUALIZAN_PRODUCTOS_COINCIDENTES_AMBOS_MEDIOS);
});

Then('Cuando hago click en el botón "Sí, eliminar"', (posicion) => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_MUESTRAN_ETIQUETAS_RESPECTIVAS);
});

Then('Se elimina de la lista el producto elegido', (posicion) => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_PRIORIZA_PRODUCTO_CON_TAG_APLICA_DESCUENTO_CON_BOTON_VER_DETALLE);
});

Then('La cantidad de productos en el carrito es actualizada', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VIZUALIZA_PRODUCTO_REVISTA_CON_SELECTOR_CANTIDAD_BOTON_AGREGAR);
});

Then('El pedido se ha eliminado', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VIZUALIZA_PRODUCTO_REVISTA_CON_SELECTOR_CANTIDAD_BOTON_AGREGAR);
});

Then('Se realiza la validación de monto mínimo', () => {
	
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VIZUALIZA_PRODUCTO_REVISTA_CON_SELECTOR_CANTIDAD_BOTON_AGREGAR);
});

Then('I logout on system removeproducts.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});