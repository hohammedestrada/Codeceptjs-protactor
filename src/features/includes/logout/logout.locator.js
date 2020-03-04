const config = {
    locator: {
      logoutLink: () => {
        return `a[ng-reflect-router-link="/signout"]`;
      },
      inputCountry : "",
      inputUserCode : "",
      inputUserPassword: ""
    },
  };
  
  module.exports = {
    config,
    locator: config.locator,
  };
  