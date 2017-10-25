@phoneNumber
Feature: Run automated tests against the PhoneNumber validation service.  The service accepts 2 input parameters: 
PhoneNumber - 10 digit phone number, with and optional country code preceeding it, 0 or 1,
License Key - alphanumeric key provided by the service owner

  Background:
    Given a new service instance

  @test1-Valid11DigitNumberwithValidLicenseKey
  Scenario: Service should return a invalid response for a valid input 11 digit phone number at bottom of boundry and a valid license key, but the number is not a registered number
    And the phone number 00000000000 is provided
    And the licenseKey 11 is provided
    When a request is made to the service
    Then the number is invalid
    
    
  @test2-Valid11DigitNumberWithValidLicenseKey
  Scenario: Service should return an valid response for a valid 11 digit phone number and a valid license key
    And the phone number 19729895742 is provided
    And the licenseKey 11 is provided
    When a request is made to the service
    Then the number is valid
    
  @test3-Valid11DigitNumberwithValidLicenseKey
  Scenario: Service should return a invalid response for a valid input 11 digit phone number at top of boundry and a valid license key, but the number is not a registered number
    And the phone number 19999999999 is provided
    And the licenseKey 11 is provided
    When a request is made to the service
    Then the number is invalid
  
 
  @test4-InValid11DigitNumberwithValidLicenseKey
  Scenario: Service should return an invalid response for a invalid input 11 digit phone number outside of allowable boundry and a valid license key, but the number is not a registered number
    And the phone number 20000000000 is provided
    And the licenseKey 11 is provided
    When a request is made to the service
    Then the number is invalid
    
  @test5-Valid11DigitNumberWithInvalidLicenseKey
  Scenario: Service should return an invalid response for a valid 11 digit phone number and a invalid license key
    And the phone number 19729895742 is provided
    And the licenseKey 2222 is provided
    When a request is made to the service
    Then the number is invalid
    
  @test6-Valid11DigitNumberwithInValidLicenseKey
  Scenario: Service should return an invalid response for a valid input 11 digit phone number at top of boundry and an invalid license key, but the number is not a registered number
    And the phone number 19999999999 is provided
    And the licenseKey 2222 is provided
    When a request is made to the service
    Then the number is invalid
 
  @test7-Invalid11DigitNumberwithInValidLicenseKey
  Scenario: Service should return an invalid response for an invalid input 11 digit phone number at top of boundry and an invalid license key, but the number is not a registered number
    And the phone number 20000000000 is provided
    And the licenseKey 2222 is provided
    When a request is made to the service
    Then the number is invalid
    
  @test8-Invalid11DigitNumberwithValidLicenseKey
  Scenario: Service should return an invalid response for an invalid input 11 digit phone number at bottom of boundry and a valid license key, but the number is not a registered number
    And a negative number is provided
    And the licenseKey 11 is provided
    When a request is made to the service
    Then the number is invalid
   
    