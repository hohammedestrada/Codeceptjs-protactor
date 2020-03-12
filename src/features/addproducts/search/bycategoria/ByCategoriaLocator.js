const BaseLocator = require('../../../../base/BaseLocator');

class ByCategoriaLocator extends BaseLocator.BaseLocator {
	constructor(){
		super();
		this.linkCategoria = `//h5[${this.xPathByText(' Categorías ')}]`;
		this.linkFragancias = `//a[${this.xPathByHref('/category/FR')}]`;
		this.hamburgerMenu = `//cx-hamburger-menu/button/span`;
		this.categoryLandingProduct = `//app-belcorp-product-list//div[${this.xPathByClassName('category-custom-glutter')}]/div[1]`;
	}
	
}

module.exports = new ByCategoriaLocator();
module.exports.ByCategoriaLocator = ByCategoriaLocator;