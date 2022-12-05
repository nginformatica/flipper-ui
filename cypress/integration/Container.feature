Feature: Container

    I want to use Container

    @focus
    Scenario: I should render and validate mock
        Given I render Container
        Then I expect 'container-content' mock to exist
        And I expect generic 'container-style' component props and style to match with mock
