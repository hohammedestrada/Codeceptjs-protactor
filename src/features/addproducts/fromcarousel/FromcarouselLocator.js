const BaseLocator = require('../../../base/BaseLocator');

class FromcarouselLocator extends BaseLocator.BaseLocator {
  constructor(){
    super();
    this.ofertasCatalogos = (index) => `//app-belcorp-carousel-product-catalog-offers[${index}]`
    this.btnAddCart = (index) => `${this.ofertasCatalogos(1)}//owl-carousel-o//div[${this.xPathByClassName('owl-item')}][${index}]//button[${this.xPathByText(' Agregar ')}]`;
  }  
}

module.exports = new FromcarouselLocator();
module.exports.FromcarouselLocator = FromcarouselLocator;