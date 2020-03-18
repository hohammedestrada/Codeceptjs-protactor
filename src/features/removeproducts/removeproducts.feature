@removeproducts
Feature: Eliminar pedido desde el carrito
  In order to achieve my goals
  As a persona
  I quiero permitir eliminar un producto de la lista

Scenario Outline: Eliminar pedido desde el carrito
  Given Dado que me encuentro en el pedido "<country>", "<user>" and "<password>" removeproducts.feature
  Given Visualizo una cantidad existente de productos
  When Elijo eliminar un producto pulsando el tachito 
  Then Se despliega el modal de "¿Estás seguro de eliminar este producto?" con dos opciones "Sí, eliminar" y "Cancelar"
  When Cuando hago click en el botón "Sí, eliminar"
  Then Se elimina de la lista el producto elegido
  And La cantidad de productos en el carrito es actualizada
  And El pedido se ha eliminado
  And Se realiza la validación de monto mínimo
  And I logout on system removeproducts.feature

Examples:
  | country | user | password | cuv | posicion |
  | PE | 041702206 | 1 | 71289 | 3 |
  