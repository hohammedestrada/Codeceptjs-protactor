@basic
Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to log in system

Scenario: add products from carousel
  Given I logged in
  When  I click on agregar button
  Then  I see the product detail
