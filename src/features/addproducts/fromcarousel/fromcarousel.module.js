const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
let logInModule = require('../../login/login.module');
let i = 1;

module.exports = {
	iloggedIn() {
		logInModule.definedSteps();
		logInModule.clickButton();
		logInModule.loginSystem();

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
	}
};
