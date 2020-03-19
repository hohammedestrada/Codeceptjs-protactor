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
		this.I.waitForElement(locator.dialogRemoveItemCart);
	}

	verificarOpciones(){
		this.waitForElements([locator.btnEliminarNo,locator.btnEliminarSi]);
	}

	clickBotonSi(){
		this.I.click(locator.btnEliminarSi);
	}

	verificarProductoNoSeaEncontrado(cuv){
		this.I.dontSeeElement(locator.productCuv(cuv))
	}

	verificarCantidadProductosActual(){
		
	}
}

module.exports = new RemoveProductsModule();
module.exports.RemoveProductsModule = RemoveProductsModule;