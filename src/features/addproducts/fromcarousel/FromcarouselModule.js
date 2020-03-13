const BaseModule = require('../../../base/BaseModule');
const FromcarouselLocator = require('./FromcarouselLocator');
const ConstUtil = require('../../../utils/ConstUtil');

class FromCarouselModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}

	addButtonFromCatalogo() {
		this.I.click(FromcarouselLocator.btnAddCartCatalogo(8));
	}

	addButtonFromRevista() {
		this.I.click(FromcarouselLocator.btnAddCartRevista(7));
	}
  
	iSeeProductConfirmation() {
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}
  
}

module.exports = new FromCarouselModule();
module.exports.FromCarouselModule = FromCarouselModule;
