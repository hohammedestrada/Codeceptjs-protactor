@addproducts/fromcarousel
Feature: Agregar item a carrito desde carrusel de revista
  In order to achieve my goals
  As a persona
  I want to be able to log in system

  Background:
    Given I have data test revista.feature

Scenario: Add products from carousel
  Given I logged in with params "<country>", "<user>" and "<password>" revista.feature
  When  I click on agregar button del carousel de revista
  Then  I see add product confirmation
  And   I logout on system revista.feature