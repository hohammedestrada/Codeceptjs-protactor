const SomosBelcorpLocator = require('../../../locators/SomosBelcorpLocator');

class FromcarouselLocator extends SomosBelcorpLocator.SomosBelcorpLocator {
	constructor(){
		super();
		this.ofertasCatalogos = (index) => `//app-belcorp-carousel-product-catalog-offers[${index}]`;
	}
}

module.exports = new FromcarouselLocator();
module.exports.FromcarouselLocator = FromcarouselLocator;