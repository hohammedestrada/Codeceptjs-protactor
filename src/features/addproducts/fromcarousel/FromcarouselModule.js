const BaseModule = require('../../../base/BaseModule');
const FromcarouselLocator = require('./FromcarouselLocator');

class FromCarouselModule extends BaseModule.BaseModule {

  async addButton() {
    this.I.click(FromcarouselLocator.btnAddCart(7));
  }
  
  iSeeProductConfirmation() {
    this.I.wait(1);
    this.I.retry(this.wait).see('Producto añadido correctamente.');
  }
  
}

module.exports = new FromCarouselModule();
module.exports.FromCarouselModule = FromCarouselModule;
