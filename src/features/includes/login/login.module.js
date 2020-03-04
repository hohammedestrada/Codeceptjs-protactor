const I = actor();
let wait = { retries: 3, minTimeout: 2000 };

module.exports = {
  definedSteps(country, user, password) {
    I.amOnPage('/');
	  I.wait(1);
  	I.selectOption('#ddlPais',country);
    I.fillField('CodigoUsuario', user);
    I.fillField('#txtContrasenia', password);
  },

  clickButton() {
    I.click('#btnLogin');
  },

  loginSystem() {
    I.wait(1);
    I.retry(wait).see('Espere un momento');
    I.retry(wait).see('Inicio');
  },

  addImage(fileName, someText) {
    I.retry(wait).saveScreenshot(fileName + '.png');
    I.addMochawesomeContext(someText);
    I.addMochawesomeContext(fileName + '.png');
  },
};
