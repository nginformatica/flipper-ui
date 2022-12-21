Feature: Content

    I want to use Content

    @focus
    Scenario: I should render and validate mock
        Given I render Content
        Then I expect 'content-content' mock to exist
        And I expect generic 'content-style' component props and style to match with mock

    @focus
    Scenario: I should get element by cy selector
        Given I render Content
        Then I should find a cy selector named 'content-container'
