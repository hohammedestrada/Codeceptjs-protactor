let loginLocator = require('../login/login.locator').locator;

const config = {
    locator: {
      logoutLink: () => {
        return locate('a')
        .withAttr({ href: '/signout' });
      },	
      selectCountry : loginLocator.selectCountry,
      inputUserCode : loginLocator.inputUserCode,
      inputUserPassword: loginLocator.inputUserPassword
    },
  };
  
  module.exports = {
    config,
    locator: config.locator,
  };
  