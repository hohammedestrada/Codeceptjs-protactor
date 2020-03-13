const BaseLocator = require('../../../../base/BaseLocator');

class ByCategoriaLocator extends BaseLocator.BaseLocator {
	constructor(){
		super();
		this.linkCategoria = `//h5[${this.xPathByText(' Categorías ')}]`;
		this.linkFragancias = `//a[${this.xPathByHref('/category/FR')}]`;
		this.hamburgerMenu = `//cx-hamburger-menu/button`;
		this.categoryLandingProduct = `//app-belcorp-product-list//div[${this.xPathByClassName('category-custom-gutter')}]/div[1]`;
		this.menuLateralFragancias = (index) => `//cx-storefront/cx-page-layout/cx-page-slot[3]/belcorp-product-facet-navigation/div[1]/div[${index+1}]/div/a`;
	}
}

module.exports = new ByCategoriaLocator();
module.exports.ByCategoriaLocator = ByCategoriaLocator;