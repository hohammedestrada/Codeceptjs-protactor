class FromcarouselLocator {
  static btnAddCart = index =>  {
    return `//owl-carousel-o/div/div/owl-stage/div/div/div[${index}]/div/app-belcorp-add-to-cart/div/div/button`;
  }
}

module.exports = FromcarouselLocator;