const AutomationUtil = require('../utils/AutomationUtil');

class BaseModule extends AutomationUtil.AutomationUtil {
	constructor(){
		super();
		this.I = actor();
	}
}

module.exports = new BaseModule();
module.exports.BaseModule = BaseModule;
