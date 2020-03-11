class ValidateCartLocator {
	constructor(){
		this.inputSearch = locate('input').withAttr();
	}
}

module.exports = new ValidateCartLocator();
module.exports.ValidateCartLocator = ValidateCartLocator;