@unit_tests
Feature: Unit_Tests
  Unit Tests for the webgoat testing suite

  @Unit_Test_getElementByID
  Scenario: Test the getElementByID method
    Given a new instance of WebGoatApplication
    When the input is set to ID_FIELD
    And a call is made to the method getElementByID
    Then the output is exampleInputEmail1

    When the input is set to PW_FIELD
    And a call is made to the method getElementByID
    Then the output is exampleInputPassword1
    
    When the input is set to SIGN_IN_BUTTON
    And a call is made to the method getElementByID
    Then the output is button[class*='btn']