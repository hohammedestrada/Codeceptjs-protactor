const BaseModule = require('../../../base/BaseModule');
const FromcarouselLocator = require('./FromcarouselLocator');

class FromCarouselModule extends BaseModule.BaseModule {

  constructor(){
    super();
  }

  addButton() {
    this.I.retry(this.wait).click(FromcarouselLocator.btnAddCart(8));
  }
  
  iSeeProductConfirmation() {
    this.I.retry(this.wait).see('Producto añadido correctamente.');
  }
  
}

module.exports = new FromCarouselModule();
module.exports.FromCarouselModule = FromCarouselModule;
