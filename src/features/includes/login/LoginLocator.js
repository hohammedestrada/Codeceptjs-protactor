class LoginLocator {
  static btnLogin() {
    return "#btnLogin";
  } 
  static selectCountry() {
    return locate('select').withAttr({id:"ddlPais"});
  };
  static inputUserCode() {
    return "//input[@id = 'txtUsuario']";
  } 
  static inputUserPassword() {
    return "#txtContrasenia";
  }
}

module.exports = LoginLocator;