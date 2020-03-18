const BaseModule = require('../../base/BaseModule');
const locator = require('./RemoveProductsLocator');

class ByNameModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

}

module.exports = new ByNameModule();
module.exports.ByNameModule = ByNameModule;