const BaseLocator = require('../../../../base/BaseLocator');

class ByNameLocator extends BaseLocator.BaseLocator {
	constructor(){
		super();
		this.inputSearch = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/label/input`;
		this.productsLi = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/div/ul/li`;
		this.txtTitulo = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/div/ul/li[2]/div/a/h4`;
		this.txtAplicaDescuento = `//cx-page-slot[2]/belcorp-search-box/div/ul/li[2]/div/a/div/span[2]/span[2]`;
		this.btnVerDetalle = (index) => `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/div/ul/li[${index}]/div/button`;
		this.rdbCatalogo = `//*[@id="toYourClientCheckbox"]`;
		this.rdbRevista = `//*[@id="toYouClientCheckbox"]`;
		this.selectorCantidad = `//app-belcorp-add-to-cart/div/div[1]/cx-item-counter/div/div/button[2]`;
		this.btnAgregar = `//app-belcorp-add-to-cart/div/div[2]/button`;
	}
}

module.exports = new ByNameLocator();
module.exports.ByNameLocator = ByNameLocator;