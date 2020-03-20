const MenuLocator = require('../../locators/MenuLocator');

class SendOrdersLocator extends MenuLocator.MenuLocator {
	constructor(){
		super();
		
	}
}

module.exports = new SendOrdersLocator();
module.exports.SendOrdersLocator = SendOrdersLocator;