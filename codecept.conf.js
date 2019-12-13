const utils= require("./src/utils/utils")
let steps = utils.fnGetFiles("./src/features", ".steps.js");

exports.config = {
  output: 'report',
  helpers: {
    Protractor: {
      url: 'http://todomvc.com/examples/angularjs/',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      //angular: false
    },
    Mochawesome:{
      uniqueScreenshotNames:true
    },
  },
  include: {},
  mocha: {
    reporterOptions: {
      reportDir: "./report/",
      reportFilename: 'SomosBelcorp3.0',
      reportTitle: 'Somos Belcorp 3.0',
      autoOpen:true,
      ts:'',
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src//features/**/*.feature',
    steps: [...steps]
  },
  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  tests: './*_test.js',
  name: 'SomosBelcorp3.0'
}