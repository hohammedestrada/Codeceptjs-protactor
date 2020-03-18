const BaseLocator = require('../../../base/BaseLocator');

class SearchLocator extends BaseLocator.BaseLocator {
	constructor(){
		super();
		this.modalAddCartConfirmation = `//cx-global-message/div`;
	}
}

module.exports = new SearchLocator();
module.exports.SearchLocator = SearchLocator;