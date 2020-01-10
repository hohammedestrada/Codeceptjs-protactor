const I = actor();
let wait = { retries: 2, minTimeout: 2000 };
const config = require('./basic.locator');
let locator = config.locator;
let i = 1;

module.exports = {
	method1() {
		I.retry(wait).amOnPage('/');
		I.retry(wait).dontSeeElement('.todo-count');

		while (i <= 3) {
			I.retry(wait).fillField(locator.txtnewTodo, 'Item' + i);
			I.retry(wait).pressKey('Enter');
			i++;
		}
		I.wait(1);
		this.addImage('Input', 'See 3 elements');
		I.retry(wait).see(' items left', '.todo-count');
	},

	selectItem() {
		I.retry(wait).click(locator.selectItem(2));
	},

	deleteItem() {
		I.retry(wait).click(locator.btnClear);
		//take Screenshot to report
		this.addImage('Delete', 'Delete Item2');
		I.wait(2);
		//I.pause();
	},

	addImage(fileName, someText) {
		I.retry(wait).saveScreenshot(fileName + '.png');
		I.addMochawesomeContext(someText);
		I.addMochawesomeContext(fileName + '.png');
	},
};
