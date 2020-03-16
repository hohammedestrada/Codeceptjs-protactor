const BaseLocator = require('../../../base/BaseLocator');

class FromcarouselLocator extends BaseLocator.BaseLocator {
	constructor(){
		super();
		this.ofertasCatalogos = (index) => `//app-belcorp-carousel-product-catalog-offers[${index}]`;
	}
}

module.exports = new FromcarouselLocator();
module.exports.FromcarouselLocator = FromcarouselLocator;