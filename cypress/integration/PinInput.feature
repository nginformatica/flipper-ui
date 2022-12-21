Feature: PinInput

    I want to use PinInput

    @focus
    Scenario: I validate with empty and validate errros
        Given I render PinInput
        Then I should see 6 'input'
        And I expect first input to be focussed

        When I click on button 'validate-pin-input'
        Then I expect all inputs to have errors

    @focus
    Scenario: I validate with wrong input and validate errors
        Given I render PinInput
        Then I should see 6 'input'
        And I expect first input to be focussed

        When I type '321321' on input
        And I click on button 'validate-pin-input'
        Then I expect all inputs to have errors

    @focus
    Scenario: I validate with correct input and validate alert
        Given I render PinInput
        Then I should see 6 'input'
        And I expect first input to be focussed

        When I type '123123' on input
        And I click on button 'validate-pin-input'
        Then I expect success when click to validate input

    @focus
    Scenario: I should get element by cy selector
        Given I render PinInput
        Then I should find a cy selector named 'pin-input-container'
