const utils = require('./src/utils/AutomationUtil');
let steps = utils.fnGetFiles('./src/features', '.steps.js');

exports.config = {
	output: 'report',
	helpers: {
		AutomationHelper: {
			require: './src/utils/AutomationHelper.js' // Import the custom helper file
		},
		Protractor: {
			url: 'https://sbappqa.somosbelcorp.com',
			driver: 'hosted',
			browser: 'chrome',
			capabilities: {
				chromeOptions: {
					// args: [ '--headless', '--disable-gpu', '--no-sandbox' ]
				}
			},
			rootElement: 'body',
			windowSize:  'maximize',
			angular: false
		},
		Mochawesome:{
			uniqueScreenshotNames:true
		},
	},
	include: {},
	mocha: {
		reporterOptions: {
			reportDir: './report/',
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
	multiple: {
		basic: {
			// run all tests in chrome and firefox
			browsers: ['chrome', 'safari', 'firefox']
		},
		smoke:{
			grep: '@basic',
			outputName: 'smoke',
			browsers: ['firefox',
				{
					browser: 'chrome',
					windowSize: 'maximize',
					desiredCapabilities: {
						acceptSslCerts: true
					}
				}
				// replace any config values from WebDriver helper
			]
		}
	},
	tests: './tests/*.spec.js',
	timeout: 10000,
	name: 'SomosBelcorp3.0'
};
