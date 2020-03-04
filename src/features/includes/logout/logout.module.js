const I = actor();
const locator = require('./logout.locator').locator;
let wait = { retries: 3, minTimeout: 2000 };

module.exports = {
  doLogout() {
	  I.wait(1);
  	I.click(locator.logoutLink);
  },
  verifyLogout(){
    I.wait(10);
  }
};
