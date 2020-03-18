const BaseLocator = require('../base/BaseLocator')

class MenuLocator extends BaseLocator.BaseLocator {
	constructor(){
        super();
        this.iconCart = `//cx-storefront/header/cx-page-layout[1]/cx-page-slot[3]/cx-mini-cart/a`;
		this.inputSearch = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/label/input`;
		this.hamburgerMenu = `//cx-hamburger-menu/button`;
	}
}

module.exports = new MenuLocator();
module.exports.MenuLocator = MenuLocator;
