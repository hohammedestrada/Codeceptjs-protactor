const BaseElement = require('./BaseElement');

class BaseLocator {
	constructor(){
		var xPath = '';

		this.locateIndex = (type,index, attrs) => {
			switch(type){
			case BaseElement.Input:
				return `//body//${BaseElement.Input}[${index}][${this.xPathByType(BaseElement.BaseType.Submit)}]`;
			case BaseElement.Button:
				return `//body//${BaseElement.Button}[${index}][${this.xPathByType(BaseElement.BaseType.Button)}]`;
			case BaseElement.Select:
				return `//body//${BaseElement.Select}[${index}][${attrs}]`;
			}
		};
		this.xPathByClassName = (className) => `contains(normalize-space(@class), '${className}')`;
		this.xPathByText = (text) => `text()='${text}'`;
		this.xPathByType = (type) => `@type = '${type}'`;
		this.xPathByRole = (type) => `@role = '${type}'`;
		this.xPathByHref = (type) => `@href = '${type}'`;
		this.xPath = (path) => {
			xPath = path;
			this.upTo = (xPathTo) => {
				xPath+'/../'+xPathTo;
				return this;
			}
			this.build = () => {
				return xPath;
			}
			return this;
		}
	}
}

module.exports = new BaseLocator();
module.exports.BaseLocator = BaseLocator;
