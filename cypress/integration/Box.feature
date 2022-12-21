Feature: Box

    I want to use Box

    @focus
    Scenario: I should render default
        Given I render Box
        Then I expect 'box-children' mock to exist
        And I expect generic 'box-params' component props and style to match with mock

    @focus
    Scenario: I should render default
        Given I render Box
        Then I should find a cy selector named 'box-container'
