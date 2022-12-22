Feature: Select

    I want to use Select

    @focus
    Scenario: I render default and validate options
        Given I render Select with 'default' preset
        When I click on Mui select option
        Then I should see all mocker options

        When I click in all list options
        Then I expect all options spies to have been called

    @focus
    Scenario: I render with-clear and validate options
        Given I render Select with 'with-clear' preset
        When I click on Mui select option
        Then I should see all mocker options

        When I click in all list options
        Then I expect all options spies to have been called

    @focus
    Scenario: I render with-clear, clear input and validate options
        Given I render Select with 'with-clear' preset
        Then I expect input not to be empty

        When I click on 1th button
        Then I expect input to have value ''

    @focus
    Scenario: I should get element by cy selector
        Given I render Select with 'default' preset
        Then I should find a cy selector named 'select-container'
