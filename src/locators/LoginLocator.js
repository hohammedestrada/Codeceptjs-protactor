const BaseElement = require('../base/BaseElement');
const SomosBelcorpLocator = require('./SomosBelcorpLocator');

class LoginLocator extends SomosBelcorpLocator.SomosBelcorpLocator {
	constructor(){
		super();
		this.btnLogin = this.locateIndex(BaseElement.Input,1);
		this.waitingElement = `//belcorp-single-sign-on/div/p`;
		this.inicioLink = locate('a').withAttr({ href: '/' });
		this.selectCountry = locate('select').withAttr({id:'ddlPais'});
		this.inputUserCode = '//input[@id = \'txtUsuario\']';
		this.inputUserPassword = '#txtContrasenia';
	}
}

module.exports = new LoginLocator();
module.exports.LoginLocator = LoginLocator;