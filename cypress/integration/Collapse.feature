Feature: Collapse

    I want to use Collapse

    @focus
    Scenario: I should render and validate mock and collapse visibility
        Given I render Collapse
        Then I expect 'collapse-content' mock to exist
        And I should see mocked 'collapse-content' value on screen
        And I expect Collapse to be visible

        When I click on first Mui Button
        And I expect Collapse to be hidden
