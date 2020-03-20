const MenuLocator = require('../../locators/MenuLocator');

class ModifyProductsLocator extends MenuLocator.MenuLocator {
	constructor(){
		super();
		this.productCuv = (cuv) => `//app-belcorp-cart-item-list/div//div[${this.xPathByText(' '+cuv+' ')}]`;
		this.inputAmmountProducts = (cuv) => this.xPath(this.productCuv(cuv))
									.upTo(`div`,4)
									.goTo(`/div/div[3]`)
									.goTo(`//cx-item-counter/div/div/input`).build();

		this.textPrecio = (cuv) => this.xPath(this.productCuv(cuv))
									.upTo(`div`,4)
									.goTo(`/div/div[2]`)
									.goTo(`/div[1]/div/div[2]`).build();

		this.textPrecioFinal = (cuv) => this.xPath(this.productCuv(cuv))
									.upTo(`div`,4)
									.goTo(`/div/div[2]`)
									.goTo(`/div[2]/div[1]/div[2]`).build();			
									
		this.cantidadProductos = `//cx-page-slot[3]/app-belcorp-cart-totals-component/div[1]/h4/span`;
		this.montoTotal = `//cx-page-slot[3]/app-belcorp-cart-totals-component/div[1]/div/app-belcorp-order-summary/div/div[1]/div[2]`;
		
	}
}

module.exports = new ModifyProductsLocator();
module.exports.ModifyProductsLocator = ModifyProductsLocator;