const BaseModule = require('../../../base/BaseModule');
const FromcarouselLocator = require('./FromcarouselLocator');
const ConstUtil = require('../../../utils/ConstUtil');

class FromCarouselModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}

	addButtonFromCatalogo() {
		this.I.retry(this.wait).click(FromcarouselLocator.btnAddCartCatalogo(8));
	}

	addButtonFromRevista() {
		this.I.retry(this.wait).click(FromcarouselLocator.btnAddCartRevista(7));
	}
  
	iSeeProductConfirmation() {
		this.I.retry(this.wait).see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}
  
}

module.exports = new FromCarouselModule();
module.exports.FromCarouselModule = FromCarouselModule;
