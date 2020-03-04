const I = actor();
const locator = require('./fromcarousel.locator').locator;
let wait = { retries: 3, minTimeout: 2000 };

module.exports = {
  addButton() {
	  I.click(locator.btnAddCart(7));
  },
  
  iseeProductDetail() {
    I.wait(2);
    I.retry(wait).see('Producto añadido correctamente.');
  },
};
