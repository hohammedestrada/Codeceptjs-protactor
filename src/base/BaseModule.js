const AutomationUtil = require('../utils/AutomationUtil');
const ConstUtil = require('../utils/ConstUtil');

class BaseModule extends AutomationUtil.AutomationUtil {
	constructor(){
		super();
		this.I = actor();
		this.Iretry = this.I.retry(this.wait);
		this.waitForElement = (element) => this.Iretry.waitForElement(element,ConstUtil.WAITING_TIME);
	}

	
}

module.exports = new BaseModule();
module.exports.BaseModule = BaseModule;
