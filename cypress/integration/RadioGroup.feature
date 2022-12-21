Feature: RadioGroup

    I want to use RadioGroup

    @focus
    Scenario: I render and validate options
        Given I render RadioGroup
        Then I expect 1th option to be checked
        And I expect 2th option to be unchecked

    @focus
    Scenario: I render, select an option and validate options
        Given I render RadioGroup

        When I click on 2th option
        Then I expect 2th option to be checked
        And I expect 1th option to be unchecked

        When I click on 1th option
        Then I expect 1th option to be checked
        And I expect 2th option to be unchecked

    @focus
    Scenario: I should get element by cy selector
        Given I render RadioGroup
        Then I should find a cy selector named 'radio-group-container'
