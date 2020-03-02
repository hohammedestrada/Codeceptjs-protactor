const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
/* const config = require('./basic.locator');
let locator = config.locator; */
let i = 1;

module.exports = {
	definedSteps() {
		I.amOnPage('');
		I.wait(1);
		I.fillField("CodigoUsuario","041702206");
		I.fillField("#txtContrasenia","1");
	
	},

	clickButton() {

		I.click('#btnLogin');
	},

	loginSystem() {
		I.wait(1);
		I.see('Espere un momento')
		I.wait(4);
		I.see('Inicio')
	},

	addImage(fileName, someText) {
		I.retry(wait).saveScreenshot(fileName + '.png');
		I.addMochawesomeContext(someText);
		I.addMochawesomeContext(fileName + '.png');
	},
};
