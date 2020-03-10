const BaseElement = require('./BaseElement');
const BaseModule = require('./BaseModule');

class BaseLocator extends BaseModule.BaseModule {
    constructor(){
        super();
        this.locateIndex = (type,index, attrs) => {
            switch(type){
                case BaseElement.Input:
                    return `//body//${BaseElement.Input}[${index}][@type = '${BaseElement.BaseType.Submit}']`;
                    break;
                case BaseElement.Button:
                    return `//body//${BaseElement.Button}[${index}][@type = '${BaseElement.BaseType.Button}']`;
                    break;
                case BaseElement.Select:
                    return `//body//${BaseElement.Select}[${index}][${attrs}]`;
                    break;
            }
        }
    }
}

module.exports = new BaseLocator();
module.exports.BaseLocator = BaseLocator;
