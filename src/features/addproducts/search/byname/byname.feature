@ignore
Feature: Search item by Name
  In order to achieve my goals
  As a persona
  I want to be able to log in system

Scenario Outline: Search item by Name
  Given I logged in with params "<country>", "<user>" and "<password>"
  When  I write name of product and press enter
  Then  I see products related
  And   I logout on system

Examples:
  | country | user | password |
  | PE | 041702206 | 1 |
  
