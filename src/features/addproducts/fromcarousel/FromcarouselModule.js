const AutomationUtil = require('../../../utils/AutomationUtil');
const I = actor();
const FromcarouselLocator = require('./FromcarouselLocator');

class FromCarouselModule {
  static addButton() {
	  I.click(FromcarouselLocator.btnAddCart(7));
  }
  
  static iSeeProductConfirmation() {
    I.wait(1);
    I.retry(AutomationUtil.wait()).see('Producto añadido correctamente.');
  }
}

module.exports = FromCarouselModule;
