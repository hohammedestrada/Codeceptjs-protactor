const SomosBelcorpLocator = require('../../../locators/SomosBelcorpLocator');

class SearchLocator extends SomosBelcorpLocator.SomosBelcorpLocator {
	constructor(){
		super();
		this.modalAddCartConfirmation = `//cx-global-message/div`;
	}
}

module.exports = new SearchLocator();
module.exports.SearchLocator = SearchLocator;