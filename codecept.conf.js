const AutomationUtil = require('./src/utils/AutomationUtil');
let steps = AutomationUtil.fnGetFiles('./src/features', '.steps.js');
const { setSharedCookies } = require('@codeceptjs/configure');

setSharedCookies();

let config = AutomationUtil.parseFileSync('sb3.config.json');

exports.config = {
	output: 'report',
	helpers: {
		REST: {
			timeout: 100000,
			defaultHeaders: {
				/* 'Auth': '11111', */
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			  },
		},
		Protractor: {
			url: config.host,
			driver: 'hosted',
			browser: 'chrome',
			//show: false,
			restart: false,
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
		AssertWrapper : {
			require: 'codeceptjs-assert'
		}
	},
	include: {},
	mocha: {
		reporterOptions: {
			reportDir: './report/',
			reportFilename: config.name,
			reportTitle: config.reportTitle,
			autoOpen:true,
			ts:'',
		}
	},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './src/features/**/*.feature',
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
	//tests: './src/features/**/*.specs.js',
	timeout: 10000,
	name: config.name
}
