const LoginLocator = require('../login/LoginLocator');

class LogoutLocator extends LoginLocator.LoginLocator {
	constructor(){
		super();
		this.logoutLink = locate('a').withAttr({ href: '/signout' });
		this.hamburgerMenu = `//cx-hamburger-menu/button`;
	}
}

module.exports = new LogoutLocator();
module.exports.LogoutLocator = LogoutLocator;