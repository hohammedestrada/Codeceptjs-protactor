const BaseModule = require('../../../../base/BaseModule');
const ByCategoriaLocator = require('./ByCategoriaLocator');
const ConstUtil = require('../../../../utils/ConstUtil');

class ByCategoriaModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	verificarSeccionMenuLateral(){
		this.I.wait(3);
		this.waitForElement(ByCategoriaLocator.linkCategoria);
	}
	
	clickEnCategoria(){
		this.Iretry.click(ByCategoriaLocator.linkCategoria);
		this.I.wait(3);
	}

	verificarLinkDeFragancias(){
		this.I.wait(3);
		this.waitForElement(ByCategoriaLocator.linkFragancias);
	}
	
	clickEnSeccionFragancias(){
		this.Iretry.click(ByCategoriaLocator.linkFragancias);
		this.I.wait(3);
	}

	verificarProductosFiltradosEnElLanding(){
		this.I.wait(3);
		this.waitForElement(ByCategoriaLocator.categoryLandingProduct);
	}

	abrirMenuLateral(){
		this.I.wait(3);
		this.waitForElement(ByCategoriaLocator.hamburgerMenu);
		this.Iretry.click(ByCategoriaLocator.hamburgerMenu);
		this.I.wait(3);
	}
}

module.exports = new ByCategoriaModule();
module.exports.ByCategoriaModule = ByCategoriaModule;
