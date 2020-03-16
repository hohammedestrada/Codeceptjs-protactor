const BaseModule = require('../../../../base/BaseModule');
const CatalogoLocator = require('./CatalogoLocator');
const ConstUtil = require('../../../../utils/ConstUtil');

class FromCarouselModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}

	addButtonFromCatalogo() {
		this.I.click(CatalogoLocator.btnAddCartCatalogo(8));
	}
  
	iSeeProductConfirmation() {
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}
  
}

module.exports = new FromCarouselModule();
module.exports.FromCarouselModule = FromCarouselModule;
