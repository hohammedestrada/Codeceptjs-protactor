const BaseLocator = require('../../../base/BaseLocator');
const BaseElement = require('../../../base/BaseElement');

class FromcarouselLocator extends BaseLocator.BaseLocator {
  constructor(){
    super();
    this.btnAddCart = (index) => `//owl-carousel-o/div/div/owl-stage/div/div/div[${index}]/div/app-belcorp-add-to-cart/div/div/button`;
  }
  
}

module.exports = new FromcarouselLocator();
module.exports.FromcarouselLocator = FromcarouselLocator;