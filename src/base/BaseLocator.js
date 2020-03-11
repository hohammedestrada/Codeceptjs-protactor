const BaseElement = require('./BaseElement');
const BaseModule = require('./BaseModule');

class BaseLocator extends BaseModule.BaseModule {
    constructor(){
        super();
        this.locateIndex = (type,index, attrs) => {
            switch(type){
                case BaseElement.Input:
                    return `//body//${BaseElement.Input}[${index}][${this.xPathByType(BaseElement.BaseType.Submit)}]`;
                    break;
                case BaseElement.Button:
                    return `//body//${BaseElement.Button}[${index}][${this.xPathByType(BaseElement.BaseType.Button)}]`;
                    break;
                case BaseElement.Select:
                    return `//body//${BaseElement.Select}[${index}][${attrs}]`;
                    break;
            }
        }
        this.xPathByClassName = (className) => `contains(normalize-space(@class), '${className}')`;
        this.xPathByText = (text) => `text()='${text}'`;
        this.xPathByType = (type) => `@type = '${type}'`;
    }
}

module.exports = new BaseLocator();
module.exports.BaseLocator = BaseLocator;
