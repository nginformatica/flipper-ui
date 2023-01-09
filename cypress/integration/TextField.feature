Feature: TextField

    I want to use TextField

    @focus
    Scenario: I want to use TextField with default preset and validate inputs
        Given I render TextField with 'default' preset
        Then I expect input to be empty

        When I type 'abc' on input
        Then I expect input not to be empty
        And I expect input to have value 'abc'

        When I clear input
        Then I expect input to be empty

        When I type '123' on input
        Then I expect input not to be empty
        And I expect input to have value '123'

    @focus
    Scenario: I want to use TextField with adornment preset and validate inputs
        Given I render TextField with 'with-adornment' preset

        When I type 'abc' on input
        Then I expect input to be empty

        When I type '123' on input
        And I expect input to have value '123'

    @focus
    Scenario: I want to use TextField with helper preset and validate inputs
        Given I render TextField with 'with-helper' preset

        Then I expect input to be empty

        When I type 'abc' on input
        Then I expect input not to be empty
        And I expect input to have value 'abc'

        When I clear input
        Then I expect input to be empty

        When I type '123' on input
        Then I expect input not to be empty
        And I expect input to have value '123'

        When I hover input
        And I click on 1th button
        Then I expect 'text-field-helper' spy to have been called 1 times

    @focus
    Scenario: I want to use TextField with select preset and validate inputs
        Given I render TextField with 'with-select' preset
        When I click on Mui select option
        Then I should see all mocked text fields options

        When I select the last option from options
        Then The input should have value from last mocked options

    @focus
    Scenario: I want to use TextField with select-clear preset and validate inputs
        Given I render TextField with 'with-select-clear' preset

        When I click on Mui select option
        Then I should see all mocked text fields options

        When I select the last option from options
        Then The input should have value from last mocked options

        When I click on 1th button
        Then I expect input to have value ''

    @focus
    Scenario: I should get element by cy selector
        Given I render TextField with 'default' preset
        Then I should find a cy selector named 'text-field-container'
