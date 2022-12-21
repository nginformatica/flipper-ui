Feature: Divider

    I want to use Divider

    @focus
    Scenario: I should render and validate mock
        Given I render Divider
        Then I expect to see one divider

    @focus
    Scenario: I should get element by cy selector
        Given I render Divider
        Then I should find a cy selector named 'divider-container'
