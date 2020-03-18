const BaseLocator = require('../../../base/BaseLocator');

class SearchLocator extends BaseLocator.BaseLocator {
	constructor(){
		super();
		this.inputSearch = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/label/input`;
		this.modalAddCartConfirmation = `//cx-global-message/div`;
	}
}

module.exports = new SearchLocator();
module.exports.SearchLocator = SearchLocator;