const BaseModule = require('../../base/BaseModule');
const locator = require('./RemoveProductsLocator');

class RemoveProductsModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

}

module.exports = new RemoveProductsModule();
module.exports.RemoveProductsModule = RemoveProductsModule;