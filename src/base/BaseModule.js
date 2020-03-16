const AutomationUtil = require('../utils/AutomationUtil');
const ConstUtil = require('../utils/ConstUtil');

class BaseModule {
	constructor(){
		this.I = actor();
		this.I.click = (element) => {
			return this.I.retry().click(element);
		}
		this.I.retry = () => {
			return actor().retry(AutomationUtil.wait);
		}
		this.I.waitForElement = (element) => {
			return this.I.retry().waitForElement(element,ConstUtil.WAITING_TIME);
		}
		this.waitForElements = (elements) => {
			elements.forEach((element) => {
				this.I.retry().waitForElement(element,ConstUtil.WAITING_TIME);
			});
			return this;
		}
		this.I.see = (element) => {
			return this.I.retry().see(element);
		}
		this.saveScreenshotWithMocha = (baseName,fileName) => {
			AutomationUtil.saveScreenshotWithMocha(baseName,fileName);
		}
	}	
}

module.exports = new BaseModule();
module.exports.BaseModule = BaseModule;
