const BaseModule = require('../../../../base/BaseModule');
const ByCategoriaLocator = require('./ByCategoriaLocator');

class ByCategoriaModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	verificarSeccionMenuLateral(){
		this.I.waitForElement(ByCategoriaLocator.linkCategoria);
	}
	
	clickEnCategoria(){
		this.I.click(ByCategoriaLocator.linkCategoria);
	}

	verificarLinkDeFragancias(){
		this.I.waitForElement(ByCategoriaLocator.linkFragancias);
	}
	
	clickEnSeccionFragancias(){
		this.I.click(ByCategoriaLocator.linkFragancias);
	}

	verificarFiltrosDeFragancias(){
		this.waitForElements(
			[ByCategoriaLocator.menuLateralFragancias(1),
				ByCategoriaLocator.menuLateralFragancias(2),
				ByCategoriaLocator.menuLateralFragancias(3),
				ByCategoriaLocator.menuLateralFragancias(4)]
				);
	}

	verificarProductosFiltradosEnElLanding(){
		this.I.waitForElement(ByCategoriaLocator.categoryLandingProduct);
	}

	abrirMenuLateral(){
		this.I.waitForElement(ByCategoriaLocator.hamburgerMenu);
		this.I.click(ByCategoriaLocator.hamburgerMenu);
	}
}

module.exports = new ByCategoriaModule();
module.exports.ByCategoriaModule = ByCategoriaModule;
