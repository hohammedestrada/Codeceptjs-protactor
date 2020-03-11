const BaseModule = require('../../../base/BaseModule');
const FromcarouselLocator = require('./FromcarouselLocator');

class FromCarouselModule extends BaseModule.BaseModule {

  constructor(){
    super();
  }

  addButtonFromCatalogo() {
    this.I.retry(this.wait).click(FromcarouselLocator.btnAddCartCatalogo(8));
  }

  addButtonFromRevista() {
    this.I.retry(this.wait).click(FromcarouselLocator.btnAddCartRevista(7));
  }
  
  iSeeProductConfirmation() {
    this.I.retry(this.wait).see('Producto añadido correctamente.');
  }
  
}

module.exports = new FromCarouselModule();
module.exports.FromCarouselModule = FromCarouselModule;
