const BaseModule = require('../../base/BaseModule');
const locator = require('./RemoveProductsLocator');

class RemoveProductsModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	clickIconCart(){
		this.I.click(locator.iconCart);
	}

	verificarCantidadProductosInicial(){

	}

	eliminarProductoPulsandoElTachito(cuv) {
		this.I.click(locator.tachito(cuv));
	}

	verificarModal(){

	}

	verificarOpciones(){

	}

	clickBotonSi(){

	}

	verificarProductoNoSeaEncontrado(){

	}

	verificarCantidadProductosActual(){
		
	}
}

module.exports = new RemoveProductsModule();
module.exports.RemoveProductsModule = RemoveProductsModule;