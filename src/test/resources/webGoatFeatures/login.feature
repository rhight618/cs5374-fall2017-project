@login
Feature: Login
  Login to the webgoat application

  @login_test1
  Scenario: Passwords should be case sensitive
    Given a new browser or client instance
    When the default user logs in
    Then the user is logged in
    When the case of the password is changed
    And the authentication tokens on the client are deleted
    And the login page is displayed
    And the user logs in
    Then the user is not logged in