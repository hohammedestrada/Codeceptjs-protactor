const I = actor();
let wait = { retries: 2, minTimeout: 2000 };

module.exports = {
	method1() {
		I.retry(wait).amOnPage('/');
		I.retry(wait).dontSeeElement('.todo-count');
		I.retry(wait).fillField({ model: 'newTodo' }, 'Write a guide');
		I.retry(wait).pressKey('Enter');
		I.retry(wait).see('Write a guide', { repeater: 'todo in todos' });
		I.retry(wait).see('1 item left', '#todo-count');
		//I.retry(wait).see("1 item left", {class:"todo-count"});
	}
};
