const LoginLocator = require('../login/LoginLocator');

class LogoutLocator {
  static logoutLink = locate('a').withAttr({ href: '/signout' });
  static selectCountry = LoginLocator.selectCountry;
  static inputUserCode = LoginLocator.inputUserCode;
  static inputUserPassword = LoginLocator.inputUserPassword;
}

module.exports = LogoutLocator;