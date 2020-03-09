class LoginLocator {
  constructor(){
    this.btnLogin =  "#btnLogin";
    this.selectCountry = locate('select').withAttr({id:"ddlPais"});
    this.inputUserCode = "//input[@id = 'txtUsuario']";
    this.inputUserPassword = "#txtContrasenia";
  }
}

module.exports = new LoginLocator();
module.exports.LoginLocator = LoginLocator;