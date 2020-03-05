const config = {
    locator: {
      btnLogin: "#btnLogin",
      selectCountry : locate('select').withAttr({id:"ddlPais"}),
      inputUserCode : "//input[@id = 'txtUsuario']",
      inputUserPassword: "#txtContrasenia"
    }
  };
  
  module.exports = {
    config,
    locator: config.locator,
  };
  