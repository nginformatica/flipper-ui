Feature: Box

    I want to use Box

    @focus
    Scenario: I should render default
        Given I render Box
        Then I expect 'box-children' mock to exist
        And I expect Box component style to match with mock
