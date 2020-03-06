class LoginLocator {
  static btnLogin = "#btnLogin";
  static selectCountry = locate('select').withAttr({id:"ddlPais"});
  static inputUserCode = "//input[@id = 'txtUsuario']";
  static inputUserPassword = "#txtContrasenia";
}

module.exports = LoginLocator;