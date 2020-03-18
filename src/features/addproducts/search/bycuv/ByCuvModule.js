const BaseModule = require('../../../../base/BaseModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const locator = require('./ByCuvLocator');

class ByCuvModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	buscarProducto(cuv){
		this.I.fillField(locator.inputSearch,cuv);
		this.waitForElements([locator.selectorCantidad])
	}

	agregarAlCarrito(cantidad){
		for(var i=0;i<cantidad;i++){
			this.I.click(locator.selectorCantidad);
		}
		this.I.click(locator.btnAgregar);
	}

	seMuestraElmodalDeconfirmacion(){
		this.I.waitForElement(locator.modalAddCartConfirmation);
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}

	estaAgregadoAlCarrito(){
		this.I.click(locator.iconCart);
		this.waitForElements([locator.textCuv,locator.textTitulo,locator.textNombreProducto]);
	}

	seVisualizaLaCantidadQueSeAdiciono(){
		this.I.waitForElement(locator.cantidadSeleccionada);
	}
}

module.exports = new ByCuvModule();
module.exports.ByCuvModule = ByCuvModule;
