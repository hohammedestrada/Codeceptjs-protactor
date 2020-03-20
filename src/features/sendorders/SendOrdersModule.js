const BaseModule = require('../../base/BaseModule');
const locator = require('./SendOrdersLocator');

class SendOrdersModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

}

module.exports = new SendOrdersModule();
module.exports.SendOrdersModule = SendOrdersModule;