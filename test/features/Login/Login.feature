Feature: Validate Table

  Scenario: Login
    Given I am on Home page
    When I login using email 'system@nhvr.net' and password 'PassTest1'
    Then I see 'NHVR Portal' title