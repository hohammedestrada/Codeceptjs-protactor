class ConstUtil {
	constructor(){
		this.ESPERANDO = 'esperando';
		this.CAMPOS_LLENADOS_CORRECTOS = 'campos llenados correctos';
		this.PRODUCTO_ANADIDO_CORRECTAMENTE = 'Producto añadido correctamente';
		this.CONFIRMACION_DE_PRODUCTO_ANADIDO = 'Confirmación de producto añadido';
		this.CLICK_AGREGAR_PRODUCTO_DE_LA_REVISTA = 'click en agregar producto de la Revista';
		this.CLICK_AGREGAR_PRODUCTO_DEL_CATALOGO = 'click en agregar producto del Catálogo';
		this.LOGIN_CORRECTO = 'Login correcto';
		this.LOGOUT_MESSAGE = 'Logout correcto';
		this.WAIT_A_MOMMENT = 'Espere un momento';
		this.WAITING_TIME = 7;
	}
}

module.exports = new ConstUtil();
module.exports.ConstUtil = ConstUtil;