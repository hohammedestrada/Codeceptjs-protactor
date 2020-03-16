const BaseModule = require('../../../../base/BaseModule');
const RevistaLocator = require('./RevistaLocator');
const ConstUtil = require('../../../../utils/ConstUtil');

class RevistaModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}
	
	addButtonFromRevista() {
		this.I.click(RevistaLocator.btnAddCartRevista(7));
	}
  
	iSeeProductConfirmation() {
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}
  
}

module.exports = new RevistaModule();
module.exports.RevistaModule = RevistaModule;
