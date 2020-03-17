const BaseModule = require('../../../../base/BaseModule');
const locator = require('./ByNameLocator');

class ByNameModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	buscarProducto(nombreProducto){
		this.I.waitForElement(locator.inputSearch);
		this.I.fillField(locator.inputSearch,nombreProducto);
	}
	
	seVisualizanLosProductos(){
		this.I.waitForElement(locator.productsLi);
	}

	seVisualizanEtiquetasRespectivas(){
		this.waitForElements([locator.txtAplicaDescuento,locator.txtTitulo]);
	}
	
	seVisualizanAplicaDescuentoVerDetalle(){
		this.waitForElements([locator.txtAplicaDescuento,locator.btnVerDetalle(2)]);
	}

	clickVerDetalle(){
		this.I.click(locator.btnVerDetalle(2));
	}

	seVisualizaElBotonAgregarYSelectorCantidad(){
		this.waitForElements(
			[locator.btnAgregar,
				locator.selectorCantidad,
				locator.rdbCatalogo,
				locator.rdbRevista
			]);
		this.I.click(locator.rdbCatalogo);
	}

	clickAgregar(){
		this.I.click(locator.btnAgregar);
	}
}

module.exports = new ByNameModule();
module.exports.ByNameModule = ByNameModule;
