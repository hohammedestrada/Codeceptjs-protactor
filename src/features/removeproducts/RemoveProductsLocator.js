const SomosBelcorpLocator = require('../../locators/SomosBelcorpLocator');

class RemoveProductsLocator extends SomosBelcorpLocator.SomosBelcorpLocator {
	constructor(){
		super();
		
	}
}

module.exports = new RemoveProductsLocator();
module.exports.RemoveProductsLocator = RemoveProductsLocator;