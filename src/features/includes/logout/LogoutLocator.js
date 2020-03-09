const LoginLocator = require('../login/LoginLocator');

class LogoutLocator {
  static logoutLink() {
    return locate('a').withAttr({ href: '/signout' });
  }
  static selectCountry() {
    return LoginLocator.selectCountry();
  } 
  static inputUserCode() {
    return LoginLocator.inputUserCode();
  } 
  static inputUserPassword() {
    return LoginLocator.inputUserPassword();
  } 
}

module.exports = LogoutLocator;