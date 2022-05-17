Feature: Login

    I want to log into Samtrygg

    # Scenario: Samtrygg login with valid credentials
    #     Given I am on the login page
    #     When I enter my 
    #         | email                  | password |
    #         | mohsin+020@samtrygg.se | Admin@123 |
    #     And I click the login button
    #     Then I should be logged in

    # Scenario: Samtrygg login with invalid credentials
    #     Given I am on the login page
    #     When I enter my 
    #         | email           | password |
    #         | invalid@samtrygg.se    | Invalid@123 |
    #     And I click the login button
    #     Then I should not be logged in

    # Scenario: Samtrygg login with empty credentials
    #     Given I am on the login page
    #     When I do not enter my credentials and I click the login button
    #     Then I should not be logged in

    # Scenario: The forgot password functionality
    #     Given I am on the login page
    #     When I click the forgot password link
    #     Then I should be on the forgot password page

    # Scenario: The remember me checkbox
    #     Given I am on the login page
    #     When I enter my
    #         | email                  | password |
    #         | mohsin+020@samtrygg.se | Admin@123 |   
    #     And I click the remember me checkbox
    #     Then I should be logged in

    # Scenario: Samtrygg login with the enter button
    #     Given I am on the login page
    #     When I enter my
    #         | email                  | password |
    #         | mohsin+020@samtrygg.se | Admin@123 |
    #     And I press the enter button
    #     Then I should be logged in

    Scenario: Samtrygg login with new password only after it has been changed
        Given I am on the login page
        When I enter my
            | email                  | password |
            | mohsin+020@samtrygg.se | Admin@1234 |
        And I click the login button
        Then I should not be logged in
        When I enter my
            | email                  | password |
            | mohsin+020@samtrygg.se | Admin@123 |
        And I click the login button
        And I change the password
            | email                  | oldpassword | newpassword |
            | mohsin+020@samtrygg.se | Admin@123 | Admin@1234 |
        And I log out
        And I login with the
            | email                  | newpassword |
            | mohsin+020@samtrygg.se | Admin@1234 |
        Then I should be logged in
