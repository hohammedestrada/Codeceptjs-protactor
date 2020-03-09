class ModifyCartLocator {
  constructor(){
    this.inputSearch = locate("input").withAttr();
  }
}

module.exports = new ModifyCartLocator();
module.exports.ModifyCartLocator = ModifyCartLocator;