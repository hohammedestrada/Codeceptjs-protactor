const basic = require('./basic.module');

/* eslint-disable */
Given('I have a defined step', () => {
  basic.method1();
});

When('I select de second item', () => {
  basic.selectItem();
});

Then('I delete item', () => {
  basic.deleteItem();
});
/* eslint-enable */
