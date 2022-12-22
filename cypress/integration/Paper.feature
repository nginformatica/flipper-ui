Feature: Paper

    I want to use Paper

    @focus
    Scenario: I should render default
        Given I render Paper
        Then I expect generic 'paper-params' component props and style to match with mock

    @focus
    Scenario: I should get element by cy selector
        Given I render Paper
        Then I should find a cy selector named 'paper-container'
