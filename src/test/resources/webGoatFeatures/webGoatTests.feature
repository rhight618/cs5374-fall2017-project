@webGoatTests
Feature: WebGoat Testing Feature
  Test suite for the WebGoat application that includes functional, unit, and security testing

  @functional_login_password_case_sesitivity_test
  Scenario: Functional Test: Passwords should be case sensitive
    Given a new browser or client instance
    When the default user logs in
    Then the user is logged in
    
    When the case of the password is changed
    And the authentication tokens on the client are deleted
    And the login page is displayed
    And the user logs in
    Then the user is not logged in

 @unit_Test_getElementByID
  Scenario: Unit Test: the getElementByID method
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
    
 @security_scanning_test
   Scenario: Security Scan: passive and active scan
    Given a new scanning session
    And a scanner with all policies disabled
    And all existing alerts are deleted
    And the application is navigated
    And the application is spidered
    
 @security_sql_inject_test
   Scenario: The application should not contain SQL injection vulnerabilities
    And the SQL-Injection policy is enabled
    And the attack strength is set to High
    And the alert threshold is set to Low
    When the scanner is run
    And the following false positives are removed
      |url                    |parameter          |cweId      |wascId   |
    And the XML report is written to the file build/zap/sql_injection.xml
    Then no Medium or higher risk vulnerabilities should be present
    
 @cross_site_scripting_test
  Scenario: The application should not contain Cross Site Scripting vulnerabilities
    And the Cross-Site-Scripting policy is enabled
    And the attack strength is set to High
    And the alert threshold is set to Low
    When the scanner is run
    And the following false positives are removed
      |url                    |parameter          |cweId      |wascId   |
    And the XML report is written to the file build/zap/xss.xml
    Then no Medium or higher risk vulnerabilities should be present
  