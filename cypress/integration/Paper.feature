Feature: Paper

    I want to use Paper

    @focus
    Scenario: I should render default
        Given I render Paper
        Then I expect generic 'paper-params' component props and style to match with mock
