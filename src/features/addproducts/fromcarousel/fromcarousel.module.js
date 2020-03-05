const automationUtil = require('../../../utils//automationUtil');
const I = actor();
const locator = require('./fromcarousel.locator').locator;

module.exports = {
  addButton() {
	  I.click(locator.btnAddCart(7));
  },
  
  iSeeProductConfirmation() {
    I.wait(1);
    I.retry(automationUtil.wait).see('Producto añadido correctamente.');
  },
};
