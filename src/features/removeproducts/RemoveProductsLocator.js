const SomosBelcorpLocator = require('../../locators/SomosBelcorpLocator');

class RemoveProductsLocator extends SomosBelcorpLocator.SomosBelcorpLocator {
	constructor(){
		super();
		this.productCuv = (cuv) => `//app-belcorp-cart-item-list/div//div[${this.xPathByText(' '+cuv+' ')}]`;
		this.tachito = (cuv) => this.xPath(this.productCuv(cuv)).upTo(`div`,4).goTo(`/div/div[4]`).build();
	}
}

module.exports = new RemoveProductsLocator();
module.exports.RemoveProductsLocator = RemoveProductsLocator;